import { useRouter } from 'next/dist/client/router'
import { IconType } from 'react-icons/lib'

import * as S from './styles'

interface ListItemProps {
  title: string
  link: string
  icon: IconType
}

export function ListItem({ icon: Icon, ...props }: ListItemProps) {
  const { asPath, push } = useRouter()

  function handlePush(link: string) {
    push(link)
  }

  return (
    <S.Container onClick={() => handlePush(props.link)}>
      <div className={asPath === props.link ? 'active' : ''}>
        <Icon size={25} />
        <span>{props.title}</span>
      </div>
    </S.Container>
  )
}
