import React from 'react'
import { Link } from 'react-router-dom'

export const LoginPage: React.FC = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <h1>Login Page</h1>
    </div>
  )
}
