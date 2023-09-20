'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import HeaderButton from '@/components/atoms/HeaderButton'
import Popup from '@/components/atoms/Popup'
import usePopup from '@/hooks/usePopup'
import ContactUs from './ContactUs'

export default function VolunteerButton() {
  const popup = usePopup(false)
  const t = useTranslations('Index')

  return (
    <>
      <HeaderButton onClick={popup.open}>{t('volunteer')}</HeaderButton>
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
        <Popup.Title>{t('help as a volunteer')}</Popup.Title>
        <Popup.Description>
          <p className="max-w-screen-2xl">{t('volunteer description')}</p>
          <p className="pt-5">{t('volunteer benefit')}</p>
          <p className="pt-5">
            <ContactUs />
          </p>
        </Popup.Description>
      </Popup>
    </>
  )
}
