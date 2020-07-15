import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth0 } from '../contexts/auth0-context';

export default function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated, user, login } = useAuth0();

  if (!isAuthenticated && !user) {
    return login();
  }

  return <Route {...rest}>{children}</Route>;
}
