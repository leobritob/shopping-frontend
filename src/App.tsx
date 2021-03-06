import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'

import { Router } from './routes'

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
    <Fragment>
      <GlobalStyles />
      <Router />
    </Fragment>
  )
}
