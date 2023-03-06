import { useGithub } from '@contexts/GithubContext'

import { UserSummary, UserSummarySkeleton } from '@components/UserSummary'
import { FindPublications } from '@components/FindPublications'
import { PublicationList, PublicationListSkeleton } from '@components/PublicationList'

export const Home = () => {
  const {
    user,
    publications,
    publicationsAmount,
    githubUserDataIsFetching,
    githubIssuesDataIsFetching,
    setGithubIssuesDataIsFetching,
  } = useGithub()

  return (
    <>
      {githubUserDataIsFetching ? <UserSummarySkeleton /> : <UserSummary {...user} />}

      <FindPublications
        publicationsAmount={publicationsAmount}
        isLoading={githubIssuesDataIsFetching}
        setIsLoading={setGithubIssuesDataIsFetching}
      />

      {githubIssuesDataIsFetching ? <PublicationListSkeleton /> : <PublicationList publications={publications} />}
    </>
  )
}
