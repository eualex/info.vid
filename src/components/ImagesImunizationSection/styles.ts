import styled from 'styled-components'

export const Container = styled.section`
  h1 {
    color: var(--gray-800);

    font-size: 3rem;
    margin-bottom: 2rem;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      margin-top: 4rem;
    }
  }
`

export const ContainerCaseSex = styled.div`
  flex-direction: column;
  width: 100%;
  text-align: left;

  margin-top: 5rem;

  h1 {
    color: var(--gray-800);

    text-align: left;

    width: 100%;

    font-size: 3rem;
    margin: 4rem 0;
  }

  div {
    display: flex;
    justify-content: flex-start;
  }

  /* div {
    img {
      width: 200px;
      height: 200px;
    }

    img + img {
      margin-left: 1rem;
    }
  } */
`
