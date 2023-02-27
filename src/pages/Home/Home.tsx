import { useEffect, useState } from 'react'

import { fetchGithubIssuesData, fetchGithubUserData } from '@services/github'
import type { GithubIssuesData, GithubUserData } from '@services/github/types'

import { UserSummary } from '@components/UserSummary'
import { PublicationList } from '@components/PublicationList'
import { FindPublications } from '@components/FindPublications'

export const Home = () => {
  const [githubUserData, setGithubUserData] = useState<GithubUserData | null>(null)
  const [githubIssuesData, setGithubIssuesData] = useState<GithubIssuesData | null>(null)

  const getGithubUserData = async () => {
    const { data, status } = await fetchGithubUserData({ githubNickName: 'Lucariozin' })

    if (status === 'failed' || !data) return

    setGithubUserData(data)
  }

  const getGithubIssuesData = async () => {
    const { data, status } = await fetchGithubIssuesData({
      githubNickName: 'Lucariozin',
      repo: 'ignite-challenge-github-blog',
    })

    if (status === 'failed' || !data) return

    setGithubIssuesData(data)
  }

  useEffect(() => {
    const getGithubData = async () => {
      await Promise.all([getGithubUserData(), getGithubIssuesData()])
    }

    getGithubData()
  }, [])

  return (
    <>
      <UserSummary {...githubUserData} />

      <FindPublications publicationsAmount={githubIssuesData?.issuesAmount} />

      <PublicationList publications={githubIssuesData?.items} />
    </>
  )
}
