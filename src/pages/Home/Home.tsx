import { Header } from '../../components/Header'
import { UserSummary } from '../../components/UserSummary'

import { Container, Wrapper } from './Home.styles'

export const Home = () => {
  return (
    <Container>
      <Header />

      <Wrapper>
        <UserSummary />
      </Wrapper>
    </Container>
  )
}
