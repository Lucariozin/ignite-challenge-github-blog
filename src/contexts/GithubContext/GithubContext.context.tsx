import { createContext, ReactNode, useCallback, useContext, useReducer } from 'react'

import { reducer } from './GithubContext.reducer'

import type { GithubContextState, User } from './GithubContext.types'

const initialState: GithubContextState = {
  user: {
    avatarUrl: '',
    name: '',
    nickName: '',
    bio: null,
    company: null,
    followers: 0,
    githubUrl: '',
  },
  publicationsAmount: 0,
  publications: [],
  dispatch: () => {},
}

const GithubContext = createContext<GithubContextState>(initialState)

export const GithubProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = {
    ...state,
    dispatch,
  }

  return <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
}

export const useGithub = () => {
  const { dispatch, ...state } = useContext(GithubContext)

  const setUser = useCallback(
    (user: User) => {
      dispatch({ type: 'SET_GITHUB_USER', payload: { user } })
    },
    [dispatch],
  )

  return { ...state, setUser }
}
