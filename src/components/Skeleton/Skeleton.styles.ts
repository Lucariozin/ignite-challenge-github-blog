import { CSSProperties } from 'react'

import styled from 'styled-components'

const formatCssObject = (cssObj?: CSSProperties) => {
  return (
    JSON.stringify(cssObj ?? '')
      .replace('{', '')
      .replace('}', '')
      .replaceAll('"', '')
      .replaceAll('A', '-a')
      .replaceAll('B', '-b')
      .replaceAll('C', '-c')
      .replaceAll('D', '-d')
      .replaceAll('E', '-e')
      .replaceAll('F', '-f')
      .replaceAll('G', '-g')
      .replaceAll('H', '-h')
      .replaceAll('I', '-i')
      .replaceAll('J', '-j')
      .replaceAll('K', '-k')
      .replaceAll('L', '-l')
      .replaceAll('M', '-m')
      .replaceAll('N', '-n')
      .replaceAll('O', '-o')
      .replaceAll('P', '-p')
      .replaceAll('Q', '-q')
      .replaceAll('R', '-r')
      .replaceAll('S', '-s')
      .replaceAll('T', '-t')
      .replaceAll('U', '-u')
      .replaceAll('V', '-v')
      .replaceAll('W', '-w')
      .replaceAll('X', '-x')
      .replaceAll('Y', '-y')
      .replaceAll('Z', '-z')
      .replaceAll(',', ' !important;') + ' !important;'
  )
}

interface ContainerProps {
  mediaQueries?: {
    md?: CSSProperties
    hmd?: CSSProperties
    sm?: CSSProperties
  }
}

export const Container = styled.span<ContainerProps>`
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

  ${({ theme, mediaQueries }) => mediaQueries?.md && theme.breakpoints.down('md')} {
    ${({ mediaQueries }) => formatCssObject(mediaQueries?.md)}
  }

  ${({ theme, mediaQueries }) => mediaQueries?.hmd && theme.breakpoints.down(750)} {
    ${({ mediaQueries }) => formatCssObject(mediaQueries?.hmd)}
  }

  ${({ theme, mediaQueries }) => mediaQueries?.sm && theme.breakpoints.down('sm')} {
    ${({ mediaQueries }) => formatCssObject(mediaQueries?.sm)}
  }

  display: block;

  border-radius: 2px;

  animation: Skeleton 1.2s infinite linear;
`
