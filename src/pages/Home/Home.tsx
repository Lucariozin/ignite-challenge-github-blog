import { useEffect, useState } from 'react'

import { fetchGithubIssuesData, fetchGithubUserData } from '@services/github'
import type { GithubUserData } from '@services/github/types'

import { UserSummary } from '@components/UserSummary'
import { PublicationList } from '@components/PublicationList'
import { FindPublications } from '@components/FindPublications'

export const Home = () => {
  const [userGithubData, setUserGithubData] = useState<GithubUserData | null>(null)

  useEffect(() => {
    const getGithubUserData = async () => {
      const { data, status } = await fetchGithubUserData({ githubNickName: 'Lucariozin' })

      const teste = await fetchGithubIssuesData({ githubNickName: 'Lucariozin', repo: 'ignite-challenge-github-blog' })

      console.log(teste)

      if (status === 'failed' || !data) return

      setUserGithubData(data)
    }

    getGithubUserData()
  }, [])

  return (
    <>
      <UserSummary {...userGithubData} />

      <FindPublications />

      <PublicationList />
    </>
  )
}
