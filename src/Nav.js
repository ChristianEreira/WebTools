import './App.css';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

function Nav() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  let isMobile = windowWidth < 800;

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);

  function toggleMenu(e) {
    if (isMobile) { setMenuOpen(!menuOpen); }
  }

  function NavButton(props) {
    return (
      <NavLink to={props.link} onClick={toggleMenu}>
        {props.children}
      </NavLink>
    );
  }

  return (
    <div>
      <nav className={isMobile ? ("mobileNav" + (menuOpen ? "" : " hidden")) : ""}>
        <h1><NavButton link="/">&lt;WebTools/&gt;</NavButton></h1>
        <ul>
          <li>Button Generator</li>
          <NavButton link="keycodes">
            <li>JS Keycodes</li>
          </NavButton>
        </ul>
      </nav>
      {isMobile && <div id="menuBtn" onClick={toggleMenu}><FontAwesomeIcon icon={menuOpen ? faTimes : faBars} /></div>}
    </div>
  );
}

export default Nav;
