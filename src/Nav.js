import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h1><Link to="/">&lt;WebTools/&gt;</Link></h1>
      <ul>
        <li>Button Generator</li>
        <Link to="keycodes">
          <li>JS Keycodes</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
