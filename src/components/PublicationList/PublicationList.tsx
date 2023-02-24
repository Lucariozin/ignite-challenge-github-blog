import { PublicationItem } from './components/PublicationItem'

import { Container } from './PublicationList.styles'

export const PublicationList = () => {
  return (
    <Container>
      <PublicationItem />
      <PublicationItem />
      <PublicationItem />
      <PublicationItem />
    </Container>
  )
}
