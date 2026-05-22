import { HiSun, HiMoon } from 'react-icons/hi2';
import { useTheme } from './ThemeContext';
import { useNavigate } from 'react-router-dom';

import logoLight from './assets/logo.jpg';
import logoDark from './assets/logow.png';

import './Navbar.css';

function Navbar() {

  const { isDark, toggleTheme } = useTheme();

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (

    <nav className={`navbar ${isDark ? 'dark' : 'light'}`}>

      <div className="nav-container">

        {/* LOGO */}

        <div className="nav-logo">

          <button
            onClick={() => navigate('/')}
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

        <ul className="nav-menu">

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

          {/* <li className="nav-item">
            <button
              onClick={() => handleNavigate('/services')}
              className="nav-link"
            >
              Services
            </button>
          </li> */}

          <li className="nav-item">
            <button
              onClick={() => handleNavigate('/contact')}
              className="nav-link"
            >
              CONTACT
            </button>
          </li>

        </ul>

        {/* THEME */}

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >

          {isDark ? <HiSun aria-hidden /> : <HiMoon aria-hidden />}

        </button>

      </div>

    </nav>
  );
}

export default Navbar;