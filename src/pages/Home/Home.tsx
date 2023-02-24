import { useEffect } from 'react'

import { api } from 'src/services/api'

import { UserSummary } from '@components/UserSummary'
import { PublicationList } from '@components/PublicationList'
import { FindPublications } from '@components/FindPublications'

export const Home = () => {
  useEffect(() => {
    api.get('/users/Lucariozin').then((response) => console.log(response))
  }, [])

  return (
    <>
      <UserSummary />

      <FindPublications />

      <PublicationList />
    </>
  )
}
