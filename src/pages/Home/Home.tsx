import { useEffect, useState } from 'react'

import { fetchUserGithubData, UserGithubData } from '@services/github'

import { UserSummary } from '@components/UserSummary'
import { PublicationList } from '@components/PublicationList'
import { FindPublications } from '@components/FindPublications'

export const Home = () => {
  const [userGithubData, setUserGithubData] = useState<UserGithubData | null>(null)

  useEffect(() => {
    const getUserGithubData = async () => {
      const { data, status } = await fetchUserGithubData({ userNickName: 'Lucariozin' })

      if (status === 'failed') return

      setUserGithubData(data)
    }

    getUserGithubData()
  }, [])

  return (
    <>
      <UserSummary {...userGithubData} />

      <FindPublications />

      <PublicationList />
    </>
  )
}
