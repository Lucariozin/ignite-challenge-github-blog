import styled from 'styled-components'

export const Container = styled.div`
  @keyframes Skeleton {
    0% {
      background-color: ${({ theme }) => theme.palette.gray[600]};
    }

    50% {
      background-color: ${({ theme }) => theme.palette.gray[500]};
    }

    100% {
      background-color: ${({ theme }) => theme.palette.gray[600]};
    }
  }

  border-radius: 2px;

  animation: Skeleton 1.2s infinite linear;
`
