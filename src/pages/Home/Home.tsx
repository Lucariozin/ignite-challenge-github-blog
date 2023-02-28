import { useGithub } from '@contexts/GithubContext'

import { UserSummary } from '@components/UserSummary'
import { PublicationList } from '@components/PublicationList'
import { FindPublications } from '@components/FindPublications'

export const Home = () => {
  const { user, publications, publicationsAmount } = useGithub()

  return (
    <>
      <UserSummary {...user} />

      <FindPublications publicationsAmount={publicationsAmount} />

      <PublicationList publications={publications} />
    </>
  )
}
