import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { BlankPage } from '@/components'
import { useAuth } from '../contexts/auth-context'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()!

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // In a real app, you'd validate credentials here before calling login.
    login()

    const from = location.state?.from?.pathname || '/account'
    navigate(from, { replace: true })
  }

  return (
    <BlankPage title={`Login`}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </BlankPage>
  )
}

export default Login
