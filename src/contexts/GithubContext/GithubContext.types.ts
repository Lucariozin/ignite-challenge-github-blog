import { Dispatch } from 'react'

// Context

export type User = {
  avatarUrl: string
  name: string
  nickName: string
  bio: string | null
  company: string | null
  followers: number
  githubUrl: string
}

export type Publication = {
  id: number
  title: string
  body: string
  publicationUrl: string
  userNickName: string
  commentsAmount: number
  creationDate: Date
}

// Reducer

export type ActionType = 'SET_GITHUB_USER' | 'SET_GITHUB_PUBLICATIONS'

export type Payload = {
  user?: User
  publications?: Publication[]
}

export type Action = {
  type: ActionType
  payload?: Payload
}

export type GithubContextState = {
  user: User
  publicationsAmount: number
  publications: Publication[]
  dispatch: Dispatch<Action>
}
