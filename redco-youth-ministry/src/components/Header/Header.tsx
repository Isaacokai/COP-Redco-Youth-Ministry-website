import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleLinkClick = () => {
    scrollToTop()
    closeMenu()
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" onClick={handleLinkClick}>
            <h2>REDCO Youth Ministry</h2>
          </Link>
        </div>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li>
              <Link 
                to="/" 
                className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`${styles.navLink} ${location.pathname === '/about' ? styles.active : ''}`}
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/team" 
                className={`${styles.navLink} ${location.pathname === '/team' ? styles.active : ''}`}
                onClick={handleLinkClick}
              >
                Team
              </Link>
            </li>
            <li>
              <Link 
                to="/events" 
                className={`${styles.navLink} ${location.pathname === '/events' ? styles.active : ''}`}
                onClick={handleLinkClick}
              >
                Events
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                className={`${styles.navLink} ${location.pathname === '/gallery' ? styles.active : ''}`}
                onClick={handleLinkClick}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={`${styles.navLink} ${location.pathname === '/blog' ? styles.active : ''}`}
                onClick={handleLinkClick}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`${styles.navLink} ${location.pathname === '/contact' ? styles.active : ''}`}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/register" 
                className={`${styles.navLink} ${styles.registerBtn}`}
                onClick={handleLinkClick}
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>

        <button 
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
