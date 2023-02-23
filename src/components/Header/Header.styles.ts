import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  height: 18.5rem;
  padding: 2rem 0;

  background-image: ${({ theme }) => `linear-gradient(to top, #14589c62, ${theme.palette.gray[800]})`};
`

export const LeftEffectImg = styled.img`
  user-select: none;
`

export const RightEffectImg = styled.img`
  user-select: none;
`

export const LogoImg = styled.img`
  margin: 2rem 0 auto 0;
  user-select: none;
`
