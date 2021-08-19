import Head from 'next/head'
import { Header } from 'components/Header'
import { MenuAside } from 'components/MenuAside'

import * as S from 'styles/pages/home'
import { GetServerSideProps } from 'next'
import { api } from 'services/api'
import { CasesGraphicSection } from 'components/CasesGraphicSection'
import { format } from 'date-fns-tz'
import ptBR from 'date-fns/locale/pt-BR'
import { AgeGroupSection } from 'components/AgeGroupSection'
import { CasesBySexSection } from 'components/CasesBySexSection'

interface HomeProps {
  amountDeath: number
  amountCases: number
  discardedCases: number
  data: {
    name: string
    Confirmados: number
    Mortes: number
    amt: number
  }[]
  ageGroupData: {
    age: string
    casos: number
    amt: number
  }[]
  casesBySexData: {
    name: string
    value: number
  }[]
}

export default function Home(props: HomeProps) {
  return (
    <S.Container>
      <Head>
        <title>Dashboard | Info.vid</title>
      </Head>
      <MenuAside className="sidebar" />
      <Header
        className="header"
        title="Olá, visitante"
        subtitle="Seja bem-vindo ao painel de controle do info.vid"
      />

      <S.Content className="content">
        <S.Title>Dados Gerais</S.Title>
        <S.BoxContainer>
          <S.Box>
            <p>Casos Confirmados</p>

            <span>{props.amountCases}</span>
          </S.Box>
          <S.Box>
            <p>Total de mortes</p>

            <span>{props.amountDeath}</span>
          </S.Box>
          <S.Box>
            <p>Casos descartados</p>

            <span>{props.discardedCases}</span>
          </S.Box>
        </S.BoxContainer>

        <CasesGraphicSection data={props.data} />
        <AgeGroupSection data={props.ageGroupData} />
        {/* <CasesBySexSection data={props.casesBySexData} /> */}
      </S.Content>
    </S.Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const resDeaths = await api.get<{ data: Date; quantidade: number }[]>(
    '/casos/obitos.json'
  )
  const resCases = await api.get<{ data: Date; quantidade: number }[]>(
    '/casos/confirmados.json'
  )
  const resAgeGroup = await api.get<{ label: string; data: number }[]>(
    '/faixa-etaria.json'
  )
  const resCasesBySex = await api.get<{ label: string; data: number }[]>(
    '/sexo.json'
  )

  const totalDeathsData = resDeaths.data.map(d => d.quantidade)[
    resDeaths.data.length - 1
  ]
  const totalCasesData = resCases.data.map(d => d.quantidade)[
    resCases.data.length - 1
  ]
  const discardedCases = 577217

  const data = resDeaths.data.map((d, index) => {
    const date = format(new Date(d.data), 'dd/MM', {
      locale: ptBR
    })

    return {
      name: date,
      Mortes: d.quantidade,
      Confirmados: resCases.data[index].quantidade,
      amt: 10000 * index
    }
  })

  const ageGroupData = resAgeGroup.data.map(d => {
    return {
      age: d.label,
      casos: d.data,
      amount: d.data
    }
  })

  const casesBySexData = resCasesBySex.data.map(d => ({
    name: d.label,
    value: d.data
  }))

  return {
    props: {
      amountDeath: totalDeathsData,
      amountCases: totalCasesData,
      discardedCases,
      data,
      ageGroupData,
      casesBySexData
    }
  }
}
