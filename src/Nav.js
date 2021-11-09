import './App.css';
import { Link, NavLink, useLocation } from 'react-router-dom';

function Nav() {
  console.log(useLocation());
  return (
    <nav>
      <h1><Link to="/">&lt;WebTools/&gt;</Link></h1>
      <ul>
        <li>Button Generator</li>
        <NavLink to="keycodes">
          <li>JS Keycodes</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
