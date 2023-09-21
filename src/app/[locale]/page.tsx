import Image from 'next/image'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import Header from '@/components/atoms/Header'
import EmailInput from './EmailInput'
import VolunteerButton from './VolunteerButton'
import SponsorButton from './SponsorButton'

export interface IndexProps {
  params: {
    locale: string
  }
}

export default function Index({ params }: IndexProps) {
  const t = useTranslations('Index')

  return (
    <main className="relative min-h-screen w-full flex flex-col items-stretch justify-stretch">
      <Image
        src="/assets/images/background.png"
        alt="red and blue background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-[-1] blur-xl"
      />
      <div className="relative flex-1 flex flex-col items-stretch justify-center h-full p-5 md:px-10 bg-black/80 ">
        <Header>
          <VolunteerButton />
          <SponsorButton />
          <LanguageSwitcher locale={params.locale} />
        </Header>
        <div>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center max-w-screen-xl m-auto gap-10 py-10">
            <section className="flex-1 flex flex-col items-center lg:items-start justify-center gap-6">
              <h1 className="text-6xl font-bold text-center lg:text-left leading-[4.3rem]">
                {t('title')}
                <span className="block uppercase">{t('title2')}</span>
              </h1>
              <h2 className="text-4xl font-medium text-center lg:text-left leading-tight text-blue-400">
                {t('date')} - {t('location')}
              </h2>
              <h3 className="text-2xl font-normal text-center lg:text-left leading-tight max-w-md">
                {t('description')}
              </h3>
              <div>
                <EmailInput locale={params.locale} />
              </div>
            </section>
            <div className="flex-1">
              <Image
                src="/assets/images/collaboration_2.png"
                alt="hero"
                width={500}
                height={500}
                objectFit="contain"
                className="max-w-xs lg:max-w-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
