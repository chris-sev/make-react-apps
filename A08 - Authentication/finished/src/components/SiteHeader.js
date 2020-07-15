import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Auth0Context } from '../contexts/auth0-context';

export default function SiteHeader() {
  const { isAuthenticated, login, logout, user } = useContext(Auth0Context);

  return (
    <div className="site-header">
      {/* stuff on the left */}
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      {/* stuff on the right */}
      <div>
        {!isAuthenticated && <button onClick={login}>Login</button>}
        {isAuthenticated && user && (
          <>
            <button>{user.name}</button>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
}
