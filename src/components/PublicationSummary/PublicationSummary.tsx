import { MdArrowBackIos } from 'react-icons/md'
import { FaCalendarDay, FaComment, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import { Container, Footer, FooterItem, GithubAnchor, GoBackButton, Header, Title } from './PublicationSummary.styles'

export const PublicationSummary = () => {
  return (
    <Container>
      <Header>
        <GoBackButton>
          <MdArrowBackIos size={16} /> VOLTAR
        </GoBackButton>

        <GithubAnchor href="#" target="_blank">
          VER NO GITHUB <FaExternalLinkAlt size={12} />
        </GithubAnchor>
      </Header>

      <Title>JavaScript data types and data structures</Title>

      <Footer>
        <FooterItem>
          <FaGithub size={18} /> Lucariozin
        </FooterItem>

        <FooterItem>
          <FaCalendarDay size={18} /> Há 1 dia
        </FooterItem>

        <FooterItem>
          <FaComment size={18} /> 5 comentários
        </FooterItem>
      </Footer>
    </Container>
  )
}
