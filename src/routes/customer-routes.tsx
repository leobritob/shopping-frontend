import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import { CustomerHomePage } from 'pages/customer'

export const CustomerRoutes: React.FC = () => {
  return (
    <Fragment>
      <Route path="/" exact>
        <CustomerHomePage />
      </Route>
      <Route path="/home" exact>
        <CustomerHomePage />
      </Route>
    </Fragment>
  )
}
