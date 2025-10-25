import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleLinkClick = () => {
    scrollToTop()
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>REDCO Youth Ministry</h3>
            <p>
              A vibrant and dynamic community of young people ignited by the power of the Holy Spirit, 
              passionately committed to living out our 2024 theme: "A People of God Unleashed to Transform Their World."
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Navigation</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
              <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
              <li><Link to="/team" onClick={handleLinkClick}>Leadership</Link></li>
              <li><Link to="/events" onClick={handleLinkClick}>Events</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>More</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/gallery" onClick={handleLinkClick}>Gallery</Link></li>
              <li><Link to="/blog" onClick={handleLinkClick}>Blog</Link></li>
              <li><Link to="/prayer" onClick={handleLinkClick}>Prayer Requests</Link></li>
              <li><Link to="/contact" onClick={handleLinkClick}>Contact Us</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Contact Info</h4>
            <div className={styles.contactInfo}>
              <p>📍 Church of Pentecost</p>
              <p>📞 +233 XX XXX XXXX</p>
              <p>✉️ youth@redco.org</p>
              <p>🕒 Sunday Service: 9:00 AM</p>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2024 REDCO Youth Ministry. All rights reserved.</p>
          <p>Part of The Church of Pentecost</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
