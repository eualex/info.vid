import styled from 'styled-components'

export const Container = styled.header`
  height: 100%;
  width: 100%;

  padding: 3rem 4rem 2rem;

  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.05);

  background-color: #fff;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .header__text {
    h1 {
      /* font-size: 2rem; */
      color: var(--gray-800);
    }

    p {
      color: #665;
    }
  }

  span {
    width: 30px;
    height: 30px;

    cursor: pointer;

    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--white);

    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.09);

    position: relative;

    &::after {
      content: '';

      position: absolute;
      top: 20%;
      right: 20%;

      width: 7px;
      height: 7px;

      border-radius: 10px;

      background-color: red;
    }
  }
`
