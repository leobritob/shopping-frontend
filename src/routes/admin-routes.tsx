import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { AdminDashboardPage } from 'pages/admin'

export const AdminRoutes: React.FC = () => {
  return (
    <Fragment>
      <Route path="/dashboard" exact component={AdminDashboardPage} />

      <Redirect path="/" to="/dashboard" />
    </Fragment>
  )
}
