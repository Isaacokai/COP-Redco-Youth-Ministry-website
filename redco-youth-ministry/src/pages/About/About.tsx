import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img 
            src="/api/placeholder/800/400" 
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

      {/* Leadership Section */}
      <section className={styles.leadership}>
        <div className={styles.container}>
          <div className={styles.leadershipHeader}>
            <div className={styles.leadershipLine}></div>
            <h2 className={styles.leadershipTitle}>LEADERSHIP</h2>
          </div>
          
          <div className={styles.leadershipGrid}>
            <div className={styles.leaderCard}>
              <div className={styles.leaderImage}>
                <img src="/api/placeholder/200/200" alt="Apostle Ebenezer Hagan" />
              </div>
              <h3 className={styles.leaderName}>Apostle Ebenezer Hagan</h3>
              <p className={styles.leaderTitle}>Youth Director</p>
            </div>
            
            <div className={styles.leaderCard}>
              <div className={styles.leaderImage}>
                <img src="/api/placeholder/200/200" alt="Elder Prof. Eric Appau Asante" />
              </div>
              <h3 className={styles.leaderName}>Elder Prof. Eric Appau Asante</h3>
              <p className={styles.leaderTitle}>Deputy Youth Director</p>
            </div>
            
            <div className={styles.leaderCard}>
              <div className={styles.leaderImage}>
                <img src="/api/placeholder/200/200" alt="Pastor Gordon Ansah" />
              </div>
              <h3 className={styles.leaderName}>Pastor Gordon Ansah</h3>
              <p className={styles.leaderTitle}>National Secretary</p>
            </div>
            
            <div className={styles.leaderCard}>
              <div className={styles.leaderImage}>
                <img src="/api/placeholder/200/200" alt="Pastor Philip Pascal Asiedu" />
              </div>
              <h3 className={styles.leaderName}>Pastor Philip Pascal Asiedu</h3>
              <p className={styles.leaderTitle}>Nec Member</p>
            </div>
            
            <div className={styles.leaderCard}>
              <div className={styles.leaderImage}>
                <img src="/api/placeholder/200/200" alt="Elder Joseph Selorm Tetteh" />
              </div>
              <h3 className={styles.leaderName}>Elder Joseph Selorm Tetteh</h3>
              <p className={styles.leaderTitle}>Nec Member</p>
            </div>
            
            <div className={styles.leaderCard}>
              <div className={styles.leaderImage}>
                <img src="/api/placeholder/200/200" alt="Dcns. Mrs. Comfort Worna" />
              </div>
              <h3 className={styles.leaderName}>Dcns. Mrs. Comfort Worna</h3>
              <p className={styles.leaderTitle}>Nec Member</p>
            </div>
            
            <div className={styles.leaderCard}>
              <div className={styles.leaderImage}>
                <img src="/api/placeholder/200/200" alt="Mrs. Priscilla Yirebi" />
              </div>
              <h3 className={styles.leaderName}>Mrs. Priscilla Yirebi</h3>
              <p className={styles.leaderTitle}>Nec Member</p>
            </div>
            
            <div className={styles.leaderCard}>
              <div className={styles.leaderImage}>
                <img src="/api/placeholder/200/200" alt="Elder Edward Ntiamoah" />
              </div>
              <h3 className={styles.leaderName}>Elder Edward Ntiamoah</h3>
              <p className={styles.leaderTitle}>Pensa Ghana Coordinator</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
