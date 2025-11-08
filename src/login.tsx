import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Cookies from 'js-cookie'

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleSubmit = (event) => {
    event.preventDefault()
    // In a real app, you'd validate credentials here.
    // For this mock, we'll just set a cookie.
    Cookies.set('isLoggedIn', 'true', { expires: 1 }) // Expires in 1 day

    // Redirect user to the page they were trying to access, or to account page
    const from = location.state?.from?.pathname || '/account'
    navigate(from, { replace: true })
  }

  return (
    <div>
      <h1>Login</h1>
      <p>You can enter any username/password to log in.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">{t('account.fieldUsername')}:</label>
          <input type="text" id="username" name="username" />
        </div>
        <br />
        <div>
          <label htmlFor="password">{t('account.fieldPassword')}:</label>
          <input type="password" id="password" name="password" />
        </div>
        <br />
        <button type="submit">{t('account.buttonLogin')}</button>
      </form>
    </div>
  )
}

export default Login
