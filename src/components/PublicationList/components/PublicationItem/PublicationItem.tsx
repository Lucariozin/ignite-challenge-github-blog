import { Container, Content, Header, PublicationDate, Title } from './PublicationItem.styles'

export const PublicationItem = () => {
  const content = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores provident, deleniti minima sunt ex, autem
    laudantium pariatur quasi harum totam delectus aliquid modi earum voluptatum vero molestias ab, perferendis nam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores provident, deleniti minima sunt ex, autem
    laudantium pariatur quasi harum totam delectus aliquid modi earum voluptatum vero molestias ab, perferendis nam.
  `

  const formattedContent = content.slice(0, 180) + '...'

  return (
    <Container>
      <Header>
        <Title>JavaScript data types and data structures</Title>

        <PublicationDate>Há 1 dia</PublicationDate>
      </Header>

      <Content>{formattedContent}</Content>
    </Container>
  )
}
