import * as S from './styles'

export function ImagesDashSection() {
  return (
    <>
      <S.Container>
        <h1>Tipos de vacinas aplicadas</h1>
        <div>
          <img src="/imutypes.png" alt="Grafico de comorbidade" />
        </div>
      </S.Container>
      <S.ContainerCaseSex>
        <h1>Região metropolitana</h1>

        <img src="/imuto.png" alt="Casos por sexo" />
      </S.ContainerCaseSex>
    </>
  )
}
