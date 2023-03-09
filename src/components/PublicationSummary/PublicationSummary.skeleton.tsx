import { Skeleton } from '@components/Skeleton'

import { Container, Header, Title, Footer, FooterItemGroup } from './PublicationSummary.styles'

export const PublicationSummarySkeleton = () => {
  return (
    <Container>
      <Header>
        <Skeleton width="4.25rem" height="1.25rem" mediaQueries={{ hmd: { height: '1rem' } }} />
        <Skeleton width="7.25rem" height="1.25rem" mediaQueries={{ hmd: { height: '1rem' } }} />
      </Header>

      <Title>
        <Skeleton
          width="100%"
          maxWidth="30rem"
          height="1.5rem"
          marginTop="0.25rem"
          mediaQueries={{ hmd: { height: '1.25rem' } }}
        />
      </Title>

      <Footer>
        <FooterItemGroup>
          <Skeleton width="7rem" height="1.25rem" mediaQueries={{ hmd: { height: '1rem' } }} />
          <Skeleton width="7rem" height="1.25rem" mediaQueries={{ hmd: { height: '1rem' } }} />
        </FooterItemGroup>

        <FooterItemGroup>
          <Skeleton width="7rem" height="1.25rem" mediaQueries={{ hmd: { height: '1rem' } }} />
        </FooterItemGroup>
      </Footer>
    </Container>
  )
}
