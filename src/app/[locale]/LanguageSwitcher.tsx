'use client'
import { Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next-intl/client'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { Menu, Transition } from '@headlessui/react'

const locales = ['en', 'fr']

export interface LanguageSwitcherProps {
  locale: string
}

export default function LanguageSwitcher({
  locale: currentLocale,
}: LanguageSwitcherProps) {
  const pathname = usePathname()

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="cursor-pointer text-gray-300 transition-colors hover:text-white flex flex-row items-center border-2 border-transparent hover:border-white py-1 px-2 rounded-3xl">
        <div className="uppercase px-1 font-semibold">{currentLocale}</div>
        <GlobeAltIcon className="h-8 w-8" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-75"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-75"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 mr-5 backdrop-blur-md bg-sky-900/20 border-[1px] border-white/30 rounded-lg rounded-tr-none origin-top-right shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-2 pl-8 pr-6 flex flex-col items-end">
            {locales.map((locale) => (
              <Menu.Item key={locale}>
                {({ active }) => (
                  <Link
                    href={`/${locale}${pathname}`}
                    className={`flex items-center font-semibold text-gray-400 hover:text-white transition-colors uppercase ${
                      (active || currentLocale === locale) && 'text-white'
                    }`}
                  >
                    {currentLocale === locale && (
                      <div className="bg-white rounded-full h-1.5 w-1.5 mr-1.5" />
                    )}{' '}
                    {locale}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
