import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding: 2rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.palette.gray[800]};

  ${({ theme }) => theme.breakpoints.down(750)} {
    padding: 1.5rem;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;

  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.blue[400]};

  text-decoration: none;
  border: 0;
  border-bottom: 1px solid transparent;
  background-color: transparent;
  transition: border-color 0.2s, filter 0.2s;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.palette.blue[400]};
  }

  &:focus-visible {
    outline: 0;
    filter: brightness(1.2);
    border-bottom: 1px solid ${({ theme }) => theme.palette.blue[400]};
  }

  ${({ theme }) => theme.breakpoints.down(750)} {
    font-size: 10px;

    & > svg {
      width: 12px;
    }
  }
`

export const GithubAnchor = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.blue[400]};

  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s, filter 0.2s;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.palette.blue[400]};
  }

  &:focus-visible {
    outline: 0;
    filter: brightness(1.2);
    border-bottom: 1px solid ${({ theme }) => theme.palette.blue[400]};
  }

  ${({ theme }) => theme.breakpoints.down(750)} {
    font-size: 10px;

    & > svg {
      width: 10px;
    }
  }
`

export const Title = styled.h2`
  width: 100%;
  margin: 1.25rem 0 1rem 0;

  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.gray[100]};

  ${({ theme }) => theme.breakpoints.down(750)} {
    font-size: 1.25rem;
  }
`

export const Footer = styled.footer`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 2rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    justify-content: space-between;
  }
`

export const FooterItemGroup = styled.div`
  display: flex;
  gap: 1.5rem;

  ${({ theme }) => theme.breakpoints.down(750)} {
    height: 2.5rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const FooterItem = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.palette.gray[400]};

  & > svg {
    color: ${({ theme }) => theme.palette.gray[500]};
  }

  ${({ theme }) => theme.breakpoints.down(750)} {
    font-size: 0.75rem;

    & > svg {
      width: 1rem;
      height: 1rem;
    }
  }
`
