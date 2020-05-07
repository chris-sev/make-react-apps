import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteHeader() {
  return (
    <div className="site-header">
      {/* stuff on the left */}
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      {/* stuff on the right */}
      <div>
        <button>Login</button>
        <button>Logout</button>
      </div>
    </div>
  );
}
