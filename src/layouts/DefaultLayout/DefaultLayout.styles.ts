import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  z-index: 2;

  max-width: 58rem;
  margin: -5.5rem auto 5rem auto;
  padding: 0 2rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 0 1.5rem;
  }
`
