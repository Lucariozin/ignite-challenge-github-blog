import { FaBuilding, FaGithub, FaUserFriends, FaExternalLinkAlt } from 'react-icons/fa'

import {
  Container,
  Footer,
  FooterItem,
  GithubAnchor,
  Header,
  UserBio,
  UserImage,
  UserName,
  Wrapper,
} from './UserSummary.styles'

export const UserSummary = () => {
  return (
    <Container>
      <UserImage src="https://github.com/Lucariozin.png" alt="" width={148} height={148} />

      <Wrapper>
        <Header>
          <UserName>Lucas Felix</UserName>

          <GithubAnchor href="https://youtube.com" target="_blank">
            GITHUB
            <FaExternalLinkAlt size={12} />
          </GithubAnchor>
        </Header>

        <UserBio>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam debitis rem voluptates officiis
          distinctio dignissimos commodi.
        </UserBio>

        <Footer>
          <FooterItem>
            <FaGithub size={18} />
            Lucariozin
          </FooterItem>

          <FooterItem>
            <FaBuilding size={16} />
            Rocketseat
          </FooterItem>

          <FooterItem>
            <FaUserFriends size={20} />
            32 seguidores
          </FooterItem>
        </Footer>
      </Wrapper>
    </Container>
  )
}
