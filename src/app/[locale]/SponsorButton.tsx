'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import HeaderButton from '@/components/atoms/HeaderButton'
import Popup from '@/components/atoms/Popup'
import usePopup from '@/hooks/usePopup'
import ContactUs from './ContactUs'

export default function SponsorButton() {
  const popup = usePopup(false)
  const t = useTranslations('Index')

  return (
    <>
      <HeaderButton onClick={popup.open}>{t('become sponsor')}</HeaderButton>
      <Popup open={popup.isOpen} onClose={popup.close}>
        <div className="flex justify-center pb-3">
          <Image
            src="/assets/images/uncle_sam.png"
            alt="red and blue background"
            width={200}
            height={200}
            className="rounded-full border-4 border-white"
          />
        </div>
        <Popup.Title>Become a sponsor!</Popup.Title>
        <Popup.Description>
          <Popup.Title>{t('help as a sponsor')}</Popup.Title>
          <Popup.Description>
            <p className="max-w-screen-2xl">{t('sponsor description')}</p>
            <p className="pt-5">{t('sponsor benefit')}</p>
            <p className="pt-5">
              <ContactUs />
            </p>
          </Popup.Description>

          {/* <p className="max-w-screen-2xl">
            Organizing such a great event is not easy. We need your help to make
            it happen!
          </p>
          <p className="pt-2">
            As a sponsor, you have different ways to help us (financial,
            in-kind, media, community).
          </p>
          <p className="pt-2">
            In exchange, we will communicate about you at every steps of the
            event. It is a great opportunity to reach the{' '}
            <strong>Dev & Design community</strong> if you have new products or
            services to promote. It is also a great way to highlight your open
            positions.
          </p>
          <p className="pt-5">
            Contact us at{' '}
            <a
              className="font-semibold text-blue-400"
              href="mailto:thibault.friedrich@gmail.com"
            >
              thibault.friedrich@gmail.com
            </a>
            .
          </p> */}
        </Popup.Description>
      </Popup>
    </>
  )
}
