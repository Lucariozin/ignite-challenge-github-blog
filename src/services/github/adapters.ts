import { APIGithubIssuesData, APIGithubUserData, GithubIssuesData, GithubUserData } from './types'

export const githubUserDataAdapter = (data: APIGithubUserData): GithubUserData => {
  return {
    avatarUrl: data.avatar_url,
    name: data.name,
    nickName: data.login,
    bio: data.bio,
    company: data.company,
    followers: data.followers,
    githubUrl: data.html_url,
  }
}

export const githubIssuesDataAdapter = (data: APIGithubIssuesData): GithubIssuesData => {
  return {
    issuesAmount: data.total_count,
    items: data.items.map((item) => ({
      id: item.id,
      title: item.title,
      body: item.body,
      publicationUrl: item.html_url,
      userNickName: item.user.login,
      commentsAmount: item.comments,
      creationDate: new Date(item.created_at),
    })),
  }
}
