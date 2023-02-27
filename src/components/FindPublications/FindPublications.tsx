import { Container, Header, Input, PublicationsAmount, PublicationsTitle } from './FindPublications.styles'

interface FindPublicationsProps {
  publicationsAmount?: number
}

export const FindPublications = ({ publicationsAmount = 0 }: FindPublicationsProps) => {
  const publicationsAmountText = `${publicationsAmount} ${publicationsAmount === 1 ? 'publicação' : 'publicações'}`

  return (
    <Container>
      <Header>
        <PublicationsTitle>Publicações</PublicationsTitle>

        <PublicationsAmount>{publicationsAmountText}</PublicationsAmount>
      </Header>

      <Input type="text" placeholder="Buscar conteúdo" />
    </Container>
  )
}
