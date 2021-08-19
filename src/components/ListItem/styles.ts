import styled from 'styled-components'

export const Container = styled.li`
  width: 100%;
  margin-bottom: 3rem;
  padding-left: 5rem;

  cursor: pointer;

  div {
    color: var(--white);

    display: flex;
    align-items: center;

    span {
      font-size: 1.7rem;

      margin-left: 1rem;
    }

    transition: all 0.2s ease;

    &.active {
      background-color: var(--gray-300);

      padding: 1rem 0 1rem 1.5rem;
      color: var(--gray-800);

      border-radius: 20px 0 0 20px;

      span {
        font-weight: 600;
      }

      &:hover {
        span {
          text-decoration: none;
        }
      }
    }
  }

  &:hover {
    div span {
      text-decoration: underline;
    }
  }
`
