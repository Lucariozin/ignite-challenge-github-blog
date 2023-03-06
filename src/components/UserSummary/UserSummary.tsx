import { FaBuilding, FaGithub, FaUserFriends, FaExternalLinkAlt } from 'react-icons/fa'

import {
  Container,
  FirstColumn,
  Footer,
  FooterItem,
  GithubAnchor,
  GithubUserInfoContainer,
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
      <FirstColumn>
        <UserImage src={avatarUrl} alt="" width={148} height={148} />

        <GithubUserInfoContainer>
          <FooterItem>
            <FaGithub size={18} />
            {nickName}
          </FooterItem>

          {company && (
            <FooterItem>
              <FaBuilding size={16} />
              {company}
            </FooterItem>
          )}

          <FooterItem>
            <FaUserFriends size={20} />
            {followersAmountText}
          </FooterItem>
        </GithubUserInfoContainer>
      </FirstColumn>

      <Wrapper>
        <Header>
          <UserName>{name}</UserName>

          <GithubAnchor href={githubUrl} target="_blank">
            GITHUB
            <FaExternalLinkAlt size={12} />
          </GithubAnchor>
        </Header>

        <UserBio>{bio}</UserBio>

        <Footer>
          <FooterItem>
            <FaGithub size={18} />
            {nickName}
          </FooterItem>

          {company && (
            <FooterItem>
              <FaBuilding size={16} />
              {company}
            </FooterItem>
          )}

          <FooterItem>
            <FaUserFriends size={20} />
            {followersAmountText}
          </FooterItem>
        </Footer>
      </Wrapper>
    </Container>
  )
}
