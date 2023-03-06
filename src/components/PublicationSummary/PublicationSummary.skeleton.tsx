import { Skeleton } from '@components/Skeleton'

import { Container, Header, Title, Footer } from './PublicationSummary.styles'

export const PublicationSummarySkeleton = () => {
  return (
    <Container>
      <Header>
        <Skeleton width="4.25rem" height="1.25rem" />
        <Skeleton width="7.25rem" height="1.25rem" />
      </Header>

      <Title>
        <Skeleton width="30rem" height="1.5rem" marginTop="0.25rem" />
      </Title>

      <Footer>
        <Skeleton width="7rem" height="1.25rem" />
        <Skeleton width="7rem" height="1.25rem" />
        <Skeleton width="7rem" height="1.25rem" />
      </Footer>
    </Container>
  )
}
