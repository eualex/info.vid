import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts'

import * as S from './styles'

interface CasesGraphicSectionProps {
  data: {
    age: string
    casos: number
    amt: number
  }[]
}

export function AgeGroupSection({ data }: CasesGraphicSectionProps) {
  return (
    <S.Container>
      <S.Title>Casos por faixa etária</S.Title>

      <S.Container>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
            barSize={20}
          >
            <XAxis
              dataKey="age"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="casos" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </ResponsiveContainer>
      </S.Container>
    </S.Container>
  )
}
