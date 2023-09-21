import { NextIntlClientProvider } from 'next-intl'
import Page from '../page'
import { render, screen } from '@testing-library/react'
import Link from 'next/link'

jest.mock('next-intl', () => ({
  useTranslations: () => jest.fn(),
}))

jest.mock('next-intl/client', () => ({
  usePathname: () => '',
}))

jest.mock(
  'next-intl/link',
  () =>
    function FakeLink({
      href,
      className,
    }: {
      href: string
      className: string
    }) {
      return <Link href={href} className={className} />
    }
)

describe('Page', () => {
  it('should render a deployment description', () => {
    render(<Page params={{ locale: 'en' }} />)

    expect(screen.queryByTestId('title')).toBeInTheDocument()
  })
})
