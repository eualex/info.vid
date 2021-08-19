import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 3rem;

  background-color: #06092b;
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 25rem;
  height: 25rem;

  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  width: min(30rem, 100%);
  height: 30rem;
  margin-top: 3rem;
`
