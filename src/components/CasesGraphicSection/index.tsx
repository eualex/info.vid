import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

import * as S from './styles'

interface CasesGraphicSectionProps {
  data: {
    name: string
    Confirmados: number
    Mortes: number
    amt: number
  }[]
}

export function CasesGraphicSection({ data }: CasesGraphicSectionProps) {
  return (
    <S.Container>
      <S.Title>Histórico de casos e mortes</S.Title>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Confirmados"
            stroke="var(--yellow-300)"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Mortes" stroke="var(--red-200)" />
        </LineChart>
      </ResponsiveContainer>
    </S.Container>
  )
}
