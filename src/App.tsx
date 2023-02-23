import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/global'
import { theme } from './styles/theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <h1>App</h1>
    </ThemeProvider>
  )
}
