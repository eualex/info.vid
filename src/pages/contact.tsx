import Head from 'next/head'
import { Header } from 'components/Header'
import { MenuAside } from 'components/MenuAside'

import * as S from 'styles/pages/home'

export default function Home() {
  return (
    <S.Container>
      <Head>
        <title>Contate-nos | Info.vid</title>
      </Head>
      <MenuAside className="sidebar" />
      <Header
        className="header"
        title="Contate-nos"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <S.Content className="content"></S.Content>
    </S.Container>
  )
}
