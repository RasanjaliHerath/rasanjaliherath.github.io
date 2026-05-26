import { useState } from 'react';

import {
  HiSun,
  HiMoon,
  HiBars3,
  HiXMark
} from 'react-icons/hi2';

import { useTheme } from './ThemeContext';
import { useNavigate } from 'react-router-dom';

import logoLight from './assets/logo.jpg';
import logoDark from './assets/logow.png';

import './Navbar.css';

function Navbar() {

  const { isDark, toggleTheme } = useTheme();

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (

    <nav className={`navbar ${isDark ? 'dark' : 'light'}`}>

      <div className="nav-container">

        {/* LOGO */}

        <div className="nav-logo">

          <button
            onClick={() => handleNavigate('/')}
            className="logo-link"
          >

            <img
              src={isDark ? logoDark : logoLight}
              alt="KRH Logo"
              className={`logo-image${isDark ? ' logo-image--dark' : ''}`}
            />

          </button>

        </div>

        {/* MENU */}

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>

          <li className="nav-item">

            <button
              onClick={() => handleNavigate('/')}
              className="nav-link"
            >
              HOME
            </button>

          </li>

          <li className="nav-item">

            <button
              onClick={() => handleNavigate('/about')}
              className="nav-link"
            >
              ABOUT
            </button>

          </li>

          <li className="nav-item">

            <button
              onClick={() => handleNavigate('/projects')}
              className="nav-link"
            >
              WORKS
            </button>

          </li>

          <li className="nav-item">

            <button
              onClick={() => handleNavigate('/contact')}
              className="nav-link"
            >
              CONTACT
            </button>

          </li>

        </ul>

        {/* RIGHT SIDE */}

        <div className="nav-right">

          {/* THEME */}

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >

            {isDark ? <HiSun aria-hidden /> : <HiMoon aria-hidden />}

          </button>

          {/* MOBILE MENU */}

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >

            {menuOpen ? <HiXMark /> : <HiBars3 />}

          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;