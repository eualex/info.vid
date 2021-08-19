import { IoNotificationsOutline } from 'react-icons/io5'

import * as S from './styles'

interface HeaderProps {
  className?: string
  title?: string
  subtitle?: string
}

export function Header({ className, subtitle, title }: HeaderProps) {
  return (
    <S.Container className={className}>
      <div className="header__text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <span>
        <IoNotificationsOutline size={20} />
      </span>
    </S.Container>
  )
}
