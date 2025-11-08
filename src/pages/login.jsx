import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BlankPage } from '../components';
import Cookies from 'js-cookie';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real app, you'd validate credentials here.
    // For this mock, we'll just set a cookie.
    Cookies.set('isLoggedIn', 'true', { expires: 1 }); // Expires in 1 day

    // Redirect user to the page they were trying to access, or to account page
    const from = location.state?.from?.pathname || '/account';
    navigate(from, { replace: true });
  };

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
  );
};

export default Login;
