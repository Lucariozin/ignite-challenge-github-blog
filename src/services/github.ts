import { api } from './api'

export type UserGithubData = {
  avatarUrl: string
  name: string
  nickName: string
  bio: string | null
  company: string | null
  followers: number
  githubUrl: string
}

type FetchUserGithubDataParams = {
  userNickName: string
}

type FetchUserGithubDataReturn = Promise<{
  data: UserGithubData | null
  status: 'success' | 'failed'
}>

export const fetchUserGithubData = async ({
  userNickName = '',
}: FetchUserGithubDataParams): FetchUserGithubDataReturn => {
  try {
    const { data } = await api.get(`https://api.github.com/users/${userNickName}`)

    const mappedData: UserGithubData = {
      avatarUrl: data.avatar_url,
      name: data.name,
      nickName: data.login,
      bio: data.bio,
      company: data.company,
      followers: data.followers,
      githubUrl: data.html_url,
    }

    return {
      data: mappedData,
      status: 'success',
    }
  } catch {
    return {
      data: null,
      status: 'failed',
    }
  }
}
