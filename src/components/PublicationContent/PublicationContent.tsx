import ReactMarkdown from 'react-markdown'

import { Container } from './PublicationContent.styles'

interface PublicationContentProps {
  content: string
}

export const PublicationContent = ({ content = '' }: PublicationContentProps) => {
  return (
    <Container>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Container>
  )
}
