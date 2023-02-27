import type { GithubIssuesData } from '@services/github/types'

import { PublicationItem } from './components/PublicationItem'

import { Container } from './PublicationList.styles'

interface PublicationListProps {
  publications?: GithubIssuesData['items']
}

export const PublicationList = ({ publications = [] }: PublicationListProps) => {
  return (
    <Container>
      {publications.map(({ id, title, creationDate, body }) => (
        <PublicationItem key={id} title={title} body={body} creationDate={creationDate} />
      ))}
    </Container>
  )
}
