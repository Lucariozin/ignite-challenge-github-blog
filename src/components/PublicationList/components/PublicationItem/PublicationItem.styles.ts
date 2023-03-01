import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled(NavLink)`
  max-width: 26rem;
  padding: 2rem;

  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.palette.gray[700]};
  background-color: ${({ theme }) => theme.palette.gray[700]};

  cursor: pointer;
  transition: border-color 0.2s;
  text-decoration: none;

  &:hover {
    border: 2px solid ${({ theme }) => theme.palette.gray[500]};
  }

  &:focus-visible {
    border: 2px solid ${({ theme }) => theme.palette.blue[400]};
    outline: 0;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const Title = styled.h4`
  max-width: 17.75rem;

  font-size: 1.25rem;
  font-weight: 700;
  line-height: 2rem;

  color: ${({ theme }) => theme.palette.gray[100]};
`

export const PublicationDate = styled.span`
  margin-top: 0.25rem;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.gray[400]};
`

export const Content = styled.div`
  margin-top: 1.25rem;

  line-height: 1.625rem;
  color: ${({ theme }) => theme.palette.gray[300]};
`
