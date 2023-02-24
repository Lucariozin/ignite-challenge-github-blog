import { Header } from '@components/Header'
import { UserSummary } from '@components/UserSummary'
import { PublicationList } from '@components/PublicationList'
import { FindPublications } from '@components/FindPublications'

import { Container, Wrapper } from './Home.styles'

export const Home = () => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <UserSummary />

        <FindPublications />

        <PublicationList />
      </Wrapper>
    </Container>
  )
}
