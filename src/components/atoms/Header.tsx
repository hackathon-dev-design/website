import HeaderButton from './HeaderButton'
import LanguageSwitcher from '../../app/[locale]/LanguageSwitcher'

export interface HeaderProps {
  children?: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="lg:fixed lg:top-10 lg:right-20 flex justify-end items-center gap-10">
      {children}
    </header>
  )
}
