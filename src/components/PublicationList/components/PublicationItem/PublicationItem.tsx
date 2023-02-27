import ReactMarkDown from 'react-markdown'

import { Container, Content, Header, PublicationDate, Title } from './PublicationItem.styles'

interface PublicationItemProps {
  title: string
  body: string
  creationDate: Date
}

export const PublicationItem = ({ title = '', body = '', creationDate = new Date() }: PublicationItemProps) => {
  const formattedContent = body.slice(0, 140) + '...'

  return (
    <Container title="Ver publicação">
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
