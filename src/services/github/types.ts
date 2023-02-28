export type Return<T> = Promise<{
  data: T | null
  status: 'success' | 'failed'
}>

export type APIGithubUserData = {
  avatar_url: string
  name: string
  login: string
  bio: string | null
  company: string | null
  followers: number
  html_url: string
}

export type GithubUserData = {
  avatarUrl: string
  name: string
  nickName: string
  bio: string | null
  company: string | null
  followers: number
  githubUrl: string
}

export type APIGithubIssuesData = {
  total_count: number
  items: {
    id: number
    html_url: string
    title: string
    body: string
    user: {
      login: string
    }
    comments: number
    created_at: string
  }[]
}

type Issue = {
  id: number
  title: string
  body: string
  publicationUrl: string
  userNickName: string
  commentsAmount: number
  creationDate: Date
}

export type GithubIssuesData = {
  issuesAmount: number
  items: Issue[]
}
