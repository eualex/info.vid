import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 5rem;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const ContainerCaseSex = styled.div`
  flex-direction: column;
  width: 100%;
  text-align: left;

  margin-top: 3rem;

  h1 {
    color: var(--gray-800);

    font-size: 3rem;
    margin-bottom: 2rem;
  }

  div {
    img {
      width: 200px;
      height: 200px;
    }

    img + img {
      margin-left: 1rem;
    }
  }
`
