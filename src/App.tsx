import React, { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'

import { Router } from './routes'

const GlobalStyles = createGlobalStyle`
  * {
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
