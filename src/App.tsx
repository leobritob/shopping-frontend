import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { Router } from './routes'
import { theme } from 'styles'

const GlobalStyles = createGlobalStyle`
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
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  )
}
