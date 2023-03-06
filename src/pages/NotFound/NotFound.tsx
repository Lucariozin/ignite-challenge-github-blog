import { MdArrowBackIos } from 'react-icons/md'

import { Container, GoBackButton, Title } from './NotFound.styles'

export const NotFound = () => {
  return (
    <Container>
      <GoBackButton to="/">
        <MdArrowBackIos size={16} /> VOLTAR
      </GoBackButton>

      <Title>Página não encontrada: 404</Title>
    </Container>
  )
}
