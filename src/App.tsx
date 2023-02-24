import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '@styles/global'
import { theme } from '@styles/theme'

import { Router } from './Router'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Router />
    </ThemeProvider>
  )
}
