import * as S from './styles'

export function ImagesDashSection() {
  return (
    <S.Container>
      <div>
        <img src="/comor.png" alt="Grafico de comorbidade" />
      </div>

      <S.ContainerCaseSex>
        <h1>Casos e óbitos por sexo</h1>
        <div>
          <img src="/cases.jpeg" alt="Casos por sexo" />
          <img src="/deaths.jpeg" alt="obtos por sexo" />
        </div>
      </S.ContainerCaseSex>
      <div className="special__case">
        <h1>Casos e óbitos por faixa etária</h1>
        <img src="/mortesFE.jpeg" alt="Casos por sexo" />
      </div>
    </S.Container>
  )
}
