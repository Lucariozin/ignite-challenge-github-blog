import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding: 2rem;

  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.palette.gray[800]};
`

export const GoBackButton = styled(NavLink)`
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
`

export const Title = styled.h1`
  margin: 1.25rem 0 1rem 0;

  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.gray[100]};
`
