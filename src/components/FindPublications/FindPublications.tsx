import { Container, Header, Input, PublicationsAmount, PublicationsTitle } from './FindPublications.styles'

export const FindPublications = () => {
  return (
    <Container>
      <Header>
        <PublicationsTitle>Publicações</PublicationsTitle>

        <PublicationsAmount>6 publicações</PublicationsAmount>
      </Header>

      <Input type="text" placeholder="Buscar conteúdo" />
    </Container>
  )
}
