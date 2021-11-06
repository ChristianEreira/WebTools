import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/">
        <h1>&lt;WebTools/&gt;</h1>
      </Link>
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
