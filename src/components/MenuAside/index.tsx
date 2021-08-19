import { FiArrowRightCircle, FiMail, FiMapPin } from 'react-icons/fi'
import { RiDashboardFill } from 'react-icons/ri'

import { ListItem } from 'components/ListItem'
import { Logo } from 'components/Logo'

import * as S from './styles'
import { FaSyringe } from 'react-icons/fa'

interface MenuAsideProps {
  className?: string
}

export function MenuAside({ className }: MenuAsideProps) {
  return (
    <S.Container className={className}>
      <Logo />

      <S.MenuContainer>
        <S.ListContainer>
          <ListItem title="Dashboard" link="/" icon={RiDashboardFill} />
          <ListItem title="Vacinação" link="/vacinacao" icon={FaSyringe} />
          <ListItem title="Sobre nós" link="/about" icon={FiArrowRightCircle} />
          <ListItem title="Contate-nos" link="/contact" icon={FiMail} />
        </S.ListContainer>
      </S.MenuContainer>
    </S.Container>
  )
}
