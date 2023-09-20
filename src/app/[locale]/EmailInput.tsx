import { useTranslations } from 'next-intl'

export default function EmailInput() {
  const t = useTranslations('Index')

  return (
    <form className="flex flex-row items-stretch w-96 relative">
      <input
        placeholder={t('email')}
        type="email"
        className="relative w-full py-3 px-4 bg-transparent rounded-lg border-2 border-white pr-[135px]"
      />
      <div className="absolute right-0 top-0 bottom-0 p-1.5">
        <button
          type="submit"
          className="relative bg-white text-black px-5 h-full rounded font-semibold hover:bg-gray-300 transition-colors"
        >
          {t('subscribe')}
        </button>
      </div>
    </form>
  )
}
