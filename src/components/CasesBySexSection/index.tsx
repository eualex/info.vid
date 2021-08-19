import { Pie, PieChart, ResponsiveContainer } from 'recharts'

import * as S from './styles'

interface CasesBySexSectionProps {
  data: {
    name: string
    value: number
  }[]
}

export function CasesBySexSection({ data }: CasesBySexSectionProps) {
  console.log(data)

  return (
    <S.Container>
      <S.Title>Casos por sexo</S.Title>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={360}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </S.Container>
  )
}
