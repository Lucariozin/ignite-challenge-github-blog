import { PublicationItemSkeleton } from './components/PublicationItem'

import { Container } from './PublicationList.styles'

export const PublicationListSkeleton = () => {
  return (
    <Container>
      <PublicationItemSkeleton />
      <PublicationItemSkeleton />
      <PublicationItemSkeleton />
      <PublicationItemSkeleton />
    </Container>
  )
}
