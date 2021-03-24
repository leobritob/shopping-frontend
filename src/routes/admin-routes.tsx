import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { AdminDashboardPage } from 'pages/admin'
import { DashboardLayout } from 'layouts'

export const AdminRoutes: React.FC = () => {
  return (
    <Fragment>
      <DashboardLayout>
        <Route path="/dashboard" exact component={AdminDashboardPage} />
      </DashboardLayout>

      <Redirect path="/" to="/dashboard" />
    </Fragment>
  )
}
