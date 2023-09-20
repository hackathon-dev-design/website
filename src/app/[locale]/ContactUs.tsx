import { useTranslations } from 'next-intl'

export default function ContactUs() {
  const t = useTranslations('Index')

  return (
    <>
      {t('contact us')}
      <a
        className="font-semibold text-blue-400"
        href="mailto:thibault.friedrich@gmail.com"
      >
        thibault.friedrich@gmail.com
      </a>
      .
    </>
  )
}
