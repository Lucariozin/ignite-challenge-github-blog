import { useCallback, useContext, useEffect, useState } from 'react'

import { fetchGithubIssuesData, fetchGithubUserData } from '@services/github'
import { delay } from '@utils/delay'

import type { Publication, User } from './GithubContext.types'

import { GithubContext } from './GithubContext.context'

export const useGithub = () => {
  const { dispatch, ...state } = useContext(GithubContext)

  const [githubUserDataIsFetching, setGithubUserDataIsFetching] = useState(false)
  const [githubIssuesDataIsFetching, setGithubIssuesDataIsFetching] = useState(false)

  const setUser = useCallback(
    (user: User) => {
      dispatch({ type: 'SET_GITHUB_USER', payload: { user } })
    },
    [dispatch],
  )

  const setPublications = useCallback(
    (publications: Publication[]) => {
      dispatch({ type: 'SET_GITHUB_PUBLICATIONS', payload: { publications } })
    },
    [dispatch],
  )

  const setPublicationsAmount = useCallback(
    (publicationsAmount: number) => {
      dispatch({ type: 'SET_GITHUB_PUBLICATIONS_AMOUNT', payload: { publicationsAmount } })
    },
    [dispatch],
  )

  const getGithubUserData = useCallback(async () => {
    setGithubUserDataIsFetching(true)

    const [{ data, status }] = await Promise.all([fetchGithubUserData({ githubNickName: 'Lucariozin' }), delay(1000)])

    if (status === 'failed' || !data) {
      setGithubUserDataIsFetching(false)
      return
    }

    setUser(data)

    setGithubUserDataIsFetching(false)
  }, [setUser])

  const getGithubIssuesData = useCallback(async () => {
    setGithubIssuesDataIsFetching(true)

    const [{ data, status }] = await Promise.all([
      fetchGithubIssuesData({
        githubNickName: 'Lucariozin',
        repo: 'ignite-challenge-github-blog',
      }),
      delay(1000),
    ])

    if (status === 'failed' || !data) {
      setGithubIssuesDataIsFetching(false)
      return
    }

    setPublications(data.items)
    setPublicationsAmount(data.issuesAmount)

    setGithubIssuesDataIsFetching(false)
  }, [setPublications, setPublicationsAmount])

  useEffect(() => {
    getGithubUserData()
    getGithubIssuesData()
  }, [getGithubUserData, getGithubIssuesData])

  return {
    ...state,
    githubUserDataIsFetching,
    githubIssuesDataIsFetching,
    setGithubIssuesDataIsFetching,
    setUser,
    setPublications,
    setPublicationsAmount,
  }
}
