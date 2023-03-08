import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  padding: 2rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.palette.gray[800]};

  ${({ theme }) => theme.breakpoints.down(750)} {
    gap: 1.5rem;
    padding: 1.5rem;

    & > img {
      display: none;
    }
  }
`

export const UserImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;

  border-radius: 8px;
  user-select: none;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  min-height: 9.25rem;
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;

  & > img {
    display: none;

    width: 3rem;
    height: 3rem;
  }

  ${({ theme }) => theme.breakpoints.down(750)} {
    & > img {
      display: block;
    }
  }
`

export const UserName = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.gray[100]};

  ${({ theme }) => theme.breakpoints.down(750)} {
    font-size: 1.25rem;
    margin-right: auto;
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
  border-color: transparent;
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

export const UserBio = styled.p`
  margin: 0.8rem 0 auto 0;
  line-height: 1.625rem;
  color: ${({ theme }) => theme.palette.gray[300]};

  ${({ theme }) => theme.breakpoints.down(750)} {
    font-size: 0.875rem;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-top: 1rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    justify-content: space-between;
  }
`

export const FooterItemGroup = styled.div`
  display: flex;
  height: 2.5rem;
  gap: 1.5rem;

  ${({ theme }) => theme.breakpoints.down(750)} {
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const FooterItem = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.palette.gray[200]};

  white-space: nowrap;

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
