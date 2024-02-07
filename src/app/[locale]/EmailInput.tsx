'use client'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import jsonp from 'jsonp'
import {
  ExclamationCircleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

import Loader from '@/components/atoms/Loader'

export interface EmailInputProps {
  locale: string
}

const isError = (status: number) => status !== 200

export default function EmailInput({ locale }: EmailInputProps) {
  const t = useTranslations('Index')

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [{ status, detail }, setMessage] = useState({
    status: 0,
    detail: '',
  })

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    event.preventDefault()

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email, language: locale }),
    })

    setMessage({
      status: response.status,
      detail: isError(response.status)
        ? t('subscribeAnswer.error')
        : t('subscribeAnswer.success'),
    })

    setLoading(false)
  }

  if (detail) {
    return (
      <div>
        <div
          className={`font-bold ${
            isError(status) ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {isError(status) ? (
            <ExclamationCircleIcon className="w-10 h-10 inline-block mr-2" />
          ) : (
            <CheckCircleIcon className="w-10 h-10 inline-block mr-2" />
          )}
          <span>{detail}</span>
        </div>
        {isError(status) ? (
          <button
            className="mt-2 font-semibold text-gray-300 group"
            onClick={() => setMessage({ status: 0, detail: '' })}
          >
            {t('retry')}
            <ArrowRightIcon className="inline-block h-5 w-5 stroke-[3] ml-2 group-hover:ml-3 transition-all" />
          </button>
        ) : (
          <p className="text-xs text-white/60 pt-1">{t('no spam')}</p>
        )}
      </div>
    )
  }

  return (
    <div>
      <form
        className="flex flex-row items-stretch w-96 relative"
        onSubmit={onSubmit}
      >
        <input
          placeholder={t('email')}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="relative w-full py-3 px-4 bg-transparent text-white rounded-lg border-2 border-white pr-[135px]"
        />
        <div className="absolute right-0 top-0 bottom-0 p-1.5">
          <button
            type="submit"
            disabled={!email || loading}
            className={`relative bg-white text-black px-5 h-full rounded font-semibold ${
              !email || loading ? '' : 'hover:bg-gray-300'
            } transition-colors`}
          >
            <span className={loading ? 'invisible' : ''}>{t('subscribe')}</span>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center text-blue-700">
                <Loader />
              </div>
            )}
          </button>
        </div>
      </form>
      <p className="text-xs text-white/60 pt-1">{t('no spam')}</p>
    </div>
  )
}
