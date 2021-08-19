import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 5rem;

  h1 {
    color: var(--gray-800);

    width: 100%;
    text-align: left;

    font-size: 3rem;
    margin-bottom: 2rem;
  }

  div {
    width: 100%;
    /* display: flex; */
    align-items: center;
    justify-content: flex-start;
  }

  .special__case {
    margin-top: 5rem;
  }
`

export const ContainerCaseSex = styled.div`
  flex-direction: column;
  width: 100%;
  text-align: left;

  margin-top: 5rem;

  h1 {
    color: var(--gray-800);

    width: 100%;
    text-align: left;

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
