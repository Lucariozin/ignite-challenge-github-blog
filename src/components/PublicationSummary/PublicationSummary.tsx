import { MdArrowBackIos } from 'react-icons/md'
import { FaCalendarDay, FaComment, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import { Container, Footer, FooterItem, GithubAnchor, GoBackButton, Header, Title } from './PublicationSummary.styles'

interface PublicationSummaryProps {
  title: string
  publicationUrl: string
  nickName: string
  creationDate: Date
  commentsAmount: number
}

export const PublicationSummary = ({
  title = '',
  publicationUrl = '',
  nickName = '',
  creationDate = new Date(),
  commentsAmount = 0,
}: PublicationSummaryProps) => {
  const commentsAmountText = `${commentsAmount} ${commentsAmount === 1 ? 'comentário' : 'comentários'}`

  return (
    <Container>
      <Header>
        <GoBackButton>
          <MdArrowBackIos size={16} /> VOLTAR
        </GoBackButton>

        <GithubAnchor href={publicationUrl} target="_blank">
          VER NO GITHUB <FaExternalLinkAlt size={12} />
        </GithubAnchor>
      </Header>

      <Title>{title}</Title>

      <Footer>
        <FooterItem>
          <FaGithub size={18} /> {nickName}
        </FooterItem>

        <FooterItem>
          <FaCalendarDay size={18} /> {creationDate.toDateString()}
        </FooterItem>

        <FooterItem>
          <FaComment size={18} /> {commentsAmountText}
        </FooterItem>
      </Footer>
    </Container>
  )
}
