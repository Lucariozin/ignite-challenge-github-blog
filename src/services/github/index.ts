import { api } from '../api'

import { githubIssuesDataAdapter, githubUserDataAdapter } from './adapters'

import type { APIGithubIssuesData, APIGithubUserData, GithubIssuesData, GithubUserData, Return } from './types'

type FetchGithubUserDataParams = {
  githubNickName: string
}

export const fetchGithubUserData = async ({
  githubNickName = '',
}: FetchGithubUserDataParams): Return<GithubUserData> => {
  try {
    const url = `https://api.github.com/users/${githubNickName}`

    const { data } = await api.get<APIGithubUserData>(url)

    const mappedData: GithubUserData = githubUserDataAdapter(data)

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

type FetchGithubIssuesDataParams = {
  githubNickName: string
  repo: string
  query?: string
}

export const fetchGithubIssuesData = async ({
  githubNickName = '',
  repo = '',
  query = '',
}: FetchGithubIssuesDataParams): Return<GithubIssuesData> => {
  try {
    const url = `https://api.github.com/search/issues?q=${query}%20repo:${githubNickName}/${repo}`

    const { data } = await api.get<APIGithubIssuesData>(url)

    const mappedData: GithubIssuesData = githubIssuesDataAdapter(data)

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
