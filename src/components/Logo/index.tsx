import * as S from './styles'

import { FaHandsHelping } from 'react-icons/fa'

export function Logo() {
  return (
    <S.Container>
      <FaHandsHelping size={25} />
      <p>Info.vid</p>
    </S.Container>
  )
}
