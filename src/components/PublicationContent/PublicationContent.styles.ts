import styled from 'styled-components'

export const Container = styled.div`
  padding: 2.5rem 2rem;

  color: ${({ theme }) => theme.palette.gray[300]};

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.palette.gray[100]};
    margin-bottom: 1rem;
  }

  & h1,
  h2 {
    font-size: 1.5rem;
  }

  & h3 {
    font-size: 1.375rem;
  }

  & h4 {
    font-size: 1.25rem;
  }

  & h5 {
    font-size: 1.125rem;
  }

  & h6 {
    font-size: 1rem;
  }

  & p {
    margin-bottom: 1.5rem;
    line-height: 1.625rem;
  }

  & ul {
    margin: 0 0 1rem 2rem;
  }

  & a {
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.blue[400]};
  }
`
