import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { Router } from './routes'
import { theme, ThemeType } from 'styles'

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: Nunito, sans-serif;
  }
`

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Router />
    </ThemeProvider>
  )
}
