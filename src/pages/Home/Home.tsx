import { useState } from 'react'

import { useGithub } from '@contexts/GithubContext'

import { UserSummary } from '@components/UserSummary'
import { PublicationList } from '@components/PublicationList'
import { FindPublications } from '@components/FindPublications'

export const Home = () => {
  const { user, publications, publicationsAmount } = useGithub()

  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <UserSummary {...user} />

      <FindPublications publicationsAmount={publicationsAmount} isLoading={isLoading} setIsLoading={setIsLoading} />

      <PublicationList publications={publications} />
    </>
  )
}
