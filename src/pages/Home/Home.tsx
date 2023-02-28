import { useCallback, useEffect } from 'react'

import { fetchGithubIssuesData, fetchGithubUserData } from '@services/github'

import { useGithub } from '@contexts/GithubContext'

import { UserSummary } from '@components/UserSummary'
import { PublicationList } from '@components/PublicationList'
import { FindPublications } from '@components/FindPublications'

export const Home = () => {
  const { setUser, setPublications, user, publications, publicationsAmount } = useGithub()

  const getGithubUserData = useCallback(async () => {
    const { data, status } = await fetchGithubUserData({ githubNickName: 'Lucariozin' })

    if (status === 'failed' || !data) return

    setUser(data)
  }, [setUser])

  const getGithubIssuesData = useCallback(async () => {
    const { data, status } = await fetchGithubIssuesData({
      githubNickName: 'Lucariozin',
      repo: 'ignite-challenge-github-blog',
    })

    if (status === 'failed' || !data) return

    setPublications(data.items)
  }, [setPublications])

  useEffect(() => {
    getGithubUserData()
    getGithubIssuesData()
  }, [getGithubUserData, getGithubIssuesData])

  return (
    <>
      <UserSummary {...user} />

      <FindPublications publicationsAmount={publicationsAmount} />

      <PublicationList publications={publications} />
    </>
  )
}
