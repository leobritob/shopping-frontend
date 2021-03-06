import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import { AdminRoutes } from './admin-routes'
import { CustomerRoutes } from './customer-routes'
import { UnauthorizedRoutes } from './unauthorized-routes'

export const Router: React.FC = () => {
  const isConnected = false //get from storage

  const AuthorizedRoutes = () => {
    const userRole: any = 'admin' //request to api
    switch (userRole) {
      case 'admin':
        return <AdminRoutes />

      case 'customer':
        return <CustomerRoutes />

      default:
        return null
    }
  }

  return (
    <BrowserRouter>
      <Switch>{isConnected ? <AuthorizedRoutes /> : <UnauthorizedRoutes />}</Switch>
    </BrowserRouter>
  )
}
