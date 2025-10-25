import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img 
            src="/images/about/1-1.png" 
            alt="Youth Ministry Gathering" 
            className={styles.heroImg}
          />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p>
              We are a vibrant and dynamic community of young people ignited by the power of the Holy Spirit, 
              passionately committed to living out the 2024 theme:
            </p>
            <a href="#" className={styles.themeLink}>
              "A People of God Unleashed to Transform Their World."
            </a>
          </div>
        </div>
      </section>

      {/* Youth Statistics Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <h2 className={styles.statsTitle}>Youth Statistics</h2>
          <p className={styles.statsSubtitle}>The Church Of Pentecost</p>
          
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1996</div>
              <div className={styles.statLabel}>Formation</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>2,105,625</div>
              <div className={styles.statLabel}>Youth</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>44.1%</div>
              <div className={styles.statLabel}>Percent</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locals Section */}
      <section className={styles.locals}>
        <div className={styles.container}>
          <div className={styles.localsHeader}>
            <div className={styles.localsLine}></div>
            <h2 className={styles.localsTitle}>OUR LOCALS</h2>
          </div>
          
          <div className={styles.localsGrid}>
            <div className={styles.localCard}>
              <div className={styles.localImage}>
                <img src="/images/about/OIP.webp" alt="Redco Central" />
              </div>
              <div className={styles.localCardContent}>
                <h3 className={styles.localName}>Redco Central</h3>
                <p className={styles.localDescription}>Our main congregation serving the central community with vibrant worship and fellowship.</p>
              </div>
            </div>
            
            <div className={styles.localCard}>
              <div className={styles.localImage}>
                <img src="/images/about/OIP.webp" alt="Dar-Es-Salaam Akan" />
              </div>
              <div className={styles.localCardContent}>
                <h3 className={styles.localName}>Dar-Es-Salaam Akan</h3>
                <p className={styles.localDescription}>A thriving local congregation serving the Akan-speaking community in Dar-Es-Salaam.</p>
              </div>
            </div>
            
            <div className={styles.localCard}>
              <div className={styles.localImage}>
                <img src="/images/about/OIP.webp" alt="Ebenezer" />
              </div>
              <div className={styles.localCardContent}>
                <h3 className={styles.localName}>Ebenezer</h3>
                <p className={styles.localDescription}>A dedicated local assembly committed to spiritual growth and community service.</p>
              </div>
            </div>
            
            <div className={styles.localCard}>
              <div className={styles.localImage}>
                <img src="/images/about/OIP.webp" alt="Redco English" />
              </div>
              <div className={styles.localCardContent}>
                <h3 className={styles.localName}>Redco English</h3>
                <p className={styles.localDescription}>English-speaking congregation fostering unity and spiritual development.</p>
              </div>
            </div>
            
            <div className={styles.localCard}>
              <div className={styles.localImage}>
                <img src="/images/about/OIP.webp" alt="Dar-Es-Salaam English" />
              </div>
              <div className={styles.localCardContent}>
                <h3 className={styles.localName}>Dar-Es-Salaam English</h3>
                <p className={styles.localDescription}>English-speaking local serving the diverse community in Dar-Es-Salaam.</p>
              </div>
            </div>
            
            <div className={styles.localCard}>
              <div className={styles.localImage}>
                <img src="/images/about/OIP.webp" alt="Redco EWE" />
              </div>
              <div className={styles.localCardContent}>
                <h3 className={styles.localName}>Redco EWE</h3>
                <p className={styles.localDescription}>Ewe-speaking congregation celebrating culture and faith in unity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
