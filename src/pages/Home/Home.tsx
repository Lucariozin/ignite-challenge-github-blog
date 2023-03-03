import { useState } from 'react'

import { useGithub } from '@contexts/GithubContext'

import { UserSummary, UserSummarySkeleton } from '@components/UserSummary'
import { FindPublications } from '@components/FindPublications'
import { PublicationList, PublicationListSkeleton } from '@components/PublicationList'

export const Home = () => {
  const { user, publications, publicationsAmount, githubUserDataIsFetching } = useGithub()

  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      {githubUserDataIsFetching ? <UserSummarySkeleton /> : <UserSummary {...user} />}

      <FindPublications publicationsAmount={publicationsAmount} isLoading={isLoading} setIsLoading={setIsLoading} />

      {isLoading ? <PublicationListSkeleton /> : <PublicationList publications={publications} />}
    </>
  )
}
