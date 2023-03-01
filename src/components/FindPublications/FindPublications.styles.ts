import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 4.5rem;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PublicationsTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.gray[200]};
`

export const PublicationsAmount = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.gray[400]};
`

export const PublicationForm = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Input = styled.input`
  width: 100%;
  height: 3.125rem;
  padding: 0 1rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.palette.gray[300]};

  outline: 0;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.palette.gray[600]};
  background-color: ${({ theme }) => theme.palette.gray[950]};

  transition: border-color 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.palette.gray[500]};
  }

  &:focus-visible {
    border: 1px solid ${({ theme }) => theme.palette.blue[400]};
  }
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 3.125rem;
  height: 3.125rem;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.palette.gray[600]};

  color: ${({ theme }) => theme.palette.blue[400]};
  background-color: ${({ theme }) => theme.palette.gray[700]};

  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;

  &:disabled {
    filter: brightness(0.8);
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.palette.gray[600]};
  }

  &:focus-visible {
    outline: 0;
    border: 1px solid ${({ theme }) => theme.palette.blue[400]};
  }
`
