import { Skeleton } from '@components/Skeleton'

import { Container, Footer, Header, UserBio, Wrapper } from './UserSummary.styles'

export const UserSummarySkeleton = () => {
  return (
    <Container>
      <Skeleton minWidth="9.25rem" height="9.25rem" borderRadius="8px" />

      <Wrapper>
        <Header>
          <Skeleton width="18rem" height="1.5rem" />

          <Skeleton width="4.25rem" height="1.25rem" />
        </Header>

        <UserBio>
          <Skeleton width="100%" height="1rem" marginBottom="1rem" marginTop="1rem" />
          <Skeleton width="100%" height="1rem" />
        </UserBio>

        <Footer>
          <Skeleton width="7rem" height="1.25rem" />
          <Skeleton width="7rem" height="1.25rem" />
          <Skeleton width="7rem" height="1.25rem" />
        </Footer>
      </Wrapper>
    </Container>
  )
}
