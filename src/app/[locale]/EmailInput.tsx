'use client'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import jsonp from 'jsonp'
import {
  ExclamationCircleIcon,
  ArrowRightIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'

import Loader from '@/components/atoms/Loader'

export interface EmailInputProps {
  url: string
  locale: string
}

export default function EmailInput({ url, locale }: EmailInputProps) {
  const t = useTranslations('Index')

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [{ msg, result }, setMessage] = useState({
    msg: '',
    result: '',
  })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    event.preventDefault()

    if (!url) return

    jsonp(
      `${url}&EMAIL=${email}&LANGUAGE=${locale}`,
      { param: 'c' },
      (_, data) => {
        setMessage(data)
        setLoading(false)
      }
    )
  }

  if (msg) {
    return (
      <div>
        <div
          className={`font-bold ${
            result === 'error' ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {result === 'error' ? (
            <ExclamationCircleIcon className="w-10 h-10 inline-block mr-2" />
          ) : (
            <InformationCircleIcon className="w-10 h-10 inline-block mr-2" />
          )}
          <span>{msg}</span>
        </div>
        {result === 'error' && (
          <button
            className="mt-2 font-semibold text-gray-300 group"
            onClick={() => setMessage({ msg: '', result: '' })}
          >
            {t('retry')}
            <ArrowRightIcon className="inline-block h-5 w-5 stroke-[3] ml-2 group-hover:ml-3 transition-all" />
          </button>
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
          className="relative w-full py-3 px-4 bg-transparent rounded-lg border-2 border-white pr-[135px]"
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
