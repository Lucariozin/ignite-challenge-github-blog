import { UserSummary } from '@components/UserSummary'
import { PublicationList } from '@components/PublicationList'
import { FindPublications } from '@components/FindPublications'

export const Home = () => {
  return (
    <>
      <UserSummary />

      <FindPublications />

      <PublicationList />
    </>
  )
}
