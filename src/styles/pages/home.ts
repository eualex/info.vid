import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-areas:
    'side head head'
    'side main main';
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows: 0.2fr 1fr;

  .header {
    grid-area: head;
  }
  .sidebar {
    grid-area: side;
  }
  .content {
    grid-area: main;
  }
`

export const Content = styled.main`
  width: 100%;
  height: 100%;

  padding: 3rem 4rem;

  overflow: auto;
`

export const Title = styled.h2`
  color: var(--gray-800);

  font-size: 3rem;
  margin-bottom: 2rem;
`

export const BoxContainer = styled.div`
  width: 100%;

  > div {
    display: flex;
    padding: 1.5rem 0;

    overflow-x: auto;

    > div + div {
      margin-left: 1.5rem;
    }

    div:nth-child(1) {
      background-color: var(--yellow-300);

      p {
        color: #555;
      }

      span {
        color: var(--gray-800);
      }
    }

    div:nth-child(3) {
      background-color: var(--green-400);

      p {
        color: #555;
      }

      span {
        color: var(--gray-800);
      }
    }

    div:nth-child(4) {
      background-color: #19647e;
    }
    div:nth-child(5) {
      background-color: var(--gray-800);
    }
  }
`

export const Box = styled.div`
  min-width: 300px;
  height: 150px;

  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--red-200);

  p {
    color: #f5f5f5;
  }

  span {
    color: #fff;
    font-size: 6rem;
    font-weight: bold;
  }
`
