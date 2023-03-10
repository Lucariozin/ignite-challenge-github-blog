import { useNavigate, useParams } from 'react-router-dom'

import { useGithub } from '@contexts/GithubContext'

import { PublicationSummary, PublicationSummarySkeleton } from '@components/PublicationSummary'
import { PublicationContent } from '@components/PublicationContent'

export const Publication = () => {
  const { user, publications, githubIssuesDataIsFetching } = useGithub()

  const params = useParams()
  const navigate = useNavigate()

  const goToThePreviousPage = () => navigate(-1)

  const publication = publications.filter((publication) => String(publication.id) === params.id)[0]

  return (
    <>
      {githubIssuesDataIsFetching ? (
        <PublicationSummarySkeleton />
      ) : (
        <PublicationSummary
          title={publication?.title}
          nickName={user.nickName}
          publicationUrl={publication?.publicationUrl}
          commentsAmount={publication?.commentsAmount}
          creationDate={publication?.creationDate}
          goToThePreviousPage={goToThePreviousPage}
        />
      )}

      {!githubIssuesDataIsFetching && <PublicationContent content={publication?.body} />}
    </>
  )
}
