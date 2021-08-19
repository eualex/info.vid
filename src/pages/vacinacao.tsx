import Head from 'next/head'
import { Header } from 'components/Header'
import { MenuAside } from 'components/MenuAside'

import * as S from 'styles/pages/home'
import { ImagesDashSection } from 'components/ImagesImunizationSection'

export default function Home() {
  return (
    <S.Container>
      <Head>
        <title>Vacinaçao | Info.vid</title>
      </Head>
      <MenuAside className="sidebar" />
      <Header
        className="header"
        title="Vacinação"
        subtitle="Veja os dados disponíveis para sua região."
      />
      <S.Content className="content">
        <ImagesDashSection />
      </S.Content>
    </S.Container>
  )
}
