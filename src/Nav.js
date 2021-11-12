import './App.css';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);

  function toggleMenu(e) {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  }

  let isMobile = windowWidth < 800;
  return (
    <div>
    <nav className={isMobile ? ("mobileNav" + (menuOpen ? "" : " hidden")) : ""}>
      <h1><Link to="/">&lt;WebTools/&gt;</Link></h1>
      <ul>
        <li>Button Generator</li>
        <NavLink to="keycodes">
          <li>JS Keycodes</li>
        </NavLink>
      </ul>
    </nav>
    {isMobile && <div id="menuBtn" onClick={toggleMenu}><FontAwesomeIcon icon={menuOpen ? faTimes : faBars} /></div>}
    </div>
  );
}

export default Nav;
