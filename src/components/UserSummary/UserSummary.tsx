import { FaBuilding, FaGithub, FaUserFriends, FaExternalLinkAlt } from 'react-icons/fa'

import {
  Container,
  Footer,
  FooterItem,
  FooterItemGroup,
  GithubAnchor,
  Header,
  UserBio,
  UserImage,
  UserName,
  Wrapper,
} from './UserSummary.styles'

interface UserSummaryProps {
  avatarUrl?: string
  name?: string
  nickName?: string
  bio?: string | null
  company?: string | null
  followers?: number
  githubUrl?: string
}

export const UserSummary = ({
  avatarUrl = '',
  name = '',
  nickName = '',
  bio = '',
  company,
  followers = 0,
  githubUrl = '',
}: UserSummaryProps) => {
  const followersAmountText = `${followers} ${followers === 1 ? 'seguidor' : 'seguidores'}`

  return (
    <Container>
      <UserImage src={avatarUrl} alt="" width={148} height={148} />

      <Wrapper>
        <Header>
          <UserImage src={avatarUrl} alt="" width={48} height={48} />

          <UserName>{name}</UserName>

          <GithubAnchor href={githubUrl} target="_blank">
            GITHUB
            <FaExternalLinkAlt size={12} />
          </GithubAnchor>
        </Header>

        <UserBio>{bio}</UserBio>

        <Footer>
          <FooterItemGroup>
            <FooterItem>
              <FaGithub size={18} />
              {nickName}
            </FooterItem>

            {!company && (
              <FooterItem>
                <FaBuilding size={16} />
                {'Rocketseat'}
              </FooterItem>
            )}
          </FooterItemGroup>

          <FooterItemGroup>
            <FooterItem>
              <FaUserFriends size={20} />
              {followersAmountText}
            </FooterItem>
          </FooterItemGroup>
        </Footer>
      </Wrapper>
    </Container>
  )
}
