import { useTranslations } from 'next-intl'

import { emailAddress } from '@/config/contact'

export default function ContactUs() {
  const t = useTranslations('Index')

  return (
    <>
      {t('contact us')}
      <a
        className="font-semibold text-blue-400"
        href={`mailto:${emailAddress}`}
      >
        {emailAddress}
      </a>
      .
    </>
  )
}
