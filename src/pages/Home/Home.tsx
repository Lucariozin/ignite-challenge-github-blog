import { Header } from '@components/Header'
import { UserSummary } from '@components/UserSummary'
import { FindPublications } from '@components/FindPublications'

import { Container, Wrapper } from './Home.styles'

export const Home = () => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <UserSummary />

        <FindPublications />
      </Wrapper>
    </Container>
  )
}
