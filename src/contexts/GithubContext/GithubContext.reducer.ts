import type { Action, ActionType, GithubContextState, Payload } from './GithubContext.types'

const ActionsFunctions: {
  [K in ActionType]: (params: { state: GithubContextState; payload?: Payload }) => GithubContextState // eslint-disable-line
} = {
  SET_GITHUB_USER: ({ state, payload }) => {
    if (!payload?.user) return state

    const { user } = payload

    return { ...state, user }
  },
  SET_GITHUB_PUBLICATIONS: ({ state, payload }) => {
    if (!payload?.publications) return state

    const { publications } = payload

    return { ...state, publications }
  },
  SET_GITHUB_PUBLICATIONS_AMOUNT: ({ state, payload }) => {
    if (!payload?.publicationsAmount) return state

    const { publicationsAmount } = payload

    return { ...state, publicationsAmount }
  },
}

export const reducer = (state: GithubContextState, action: Action): GithubContextState => {
  const { type, payload } = action

  const actionFunction = ActionsFunctions[type]

  if (!actionFunction) return state

  const newState = actionFunction({ state, payload })

  return newState
}
