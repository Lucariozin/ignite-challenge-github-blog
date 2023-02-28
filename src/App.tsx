import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '@styles/global'
import { theme } from '@styles/theme'

import { GithubProvider } from '@contexts/GithubContext'

import { Router } from './Router'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <GithubProvider>
        <Router />
      </GithubProvider>
    </ThemeProvider>
  )
}
