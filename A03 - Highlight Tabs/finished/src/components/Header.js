import React from 'react';
import Tab from './Tab';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="tabs">
      <Tab>
        <NavLink to="/" activeClassName="is-active" exact={true}>
          Home
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to="/about" activeClassName="is-active">
          About
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to="/features" activeClassName="is-active">
          Features
        </NavLink>
      </Tab>
    </div>
  );
}
