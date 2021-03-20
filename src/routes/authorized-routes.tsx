import React from 'react'

import { AdminRoutes } from './admin-routes'
import { CustomerRoutes } from './customer-routes'

export const AuthorizedRoutes: React.FC = () => {
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
