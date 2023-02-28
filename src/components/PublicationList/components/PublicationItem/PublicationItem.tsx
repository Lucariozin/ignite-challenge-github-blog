import ReactMarkDown from 'react-markdown'

import { Container, Content, Header, PublicationDate, Title } from './PublicationItem.styles'

interface PublicationItemProps {
  id: number
  title: string
  body: string
  creationDate: Date
}

export const PublicationItem = ({ id, title = '', body = '', creationDate = new Date() }: PublicationItemProps) => {
  const publicationPage = `/publications/${id}`

  const formattedContent = body.slice(0, 140) + '...'

  return (
    <Container to={publicationPage}>
      <Header>
        <Title>{title}</Title>

        <PublicationDate>{creationDate.toDateString()}</PublicationDate>
      </Header>

      <Content>
        <ReactMarkDown>{formattedContent}</ReactMarkDown>
      </Content>
    </Container>
  )
}
