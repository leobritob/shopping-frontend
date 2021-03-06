import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import { LoginPage } from 'pages'

export const UnauthorizedRoutes: React.FC = () => {
  return (
    <Fragment>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
    </Fragment>
  )
}
