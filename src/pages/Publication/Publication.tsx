import { useNavigate, useParams } from 'react-router-dom'

import { useGithub } from '@contexts/GithubContext'

import { PublicationSummary } from '@components/PublicationSummary'

export const Publication = () => {
  const { user, publications } = useGithub()

  const params = useParams()
  const navigate = useNavigate()

  const goToThePreviousPage = () => navigate(-1)

  const publication = publications.filter((publication) => String(publication.id) === params.id)[0]

  return (
    <>
      <PublicationSummary
        title={publication?.title}
        nickName={user.nickName}
        publicationUrl={publication?.publicationUrl}
        commentsAmount={publication?.commentsAmount}
        creationDate={publication?.creationDate}
        goToThePreviousPage={goToThePreviousPage}
      />
    </>
  )
}
