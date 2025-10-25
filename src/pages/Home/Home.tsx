import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Welcome to REDCO Youth Ministry
            </h1>
            <p className={styles.heroSubtitle}>
              A vibrant and dynamic community of young people ignited by the power of the Holy Spirit
            </p>
            <p className={styles.heroDescription}>
              We are passionately committed to living out our 2024 theme: 
              <strong> "A People of God Unleashed to Transform Their World."</strong>
            </p>
            <div className={styles.heroButtons}>
              <Link to="/about" className={styles.btnPrimary}>
                Learn More
              </Link>
              <Link to="/register" className={styles.btnSecondary}>
                Join Us
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img 
              src="/images/home/Youth Ministry Gathering.png" 
              alt="Youth Ministry Gathering" 
              className={styles.heroImg}
            />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className={styles.quickStats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>2M+</div>
              <div className={styles.statLabel}>Youth Members</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>28</div>
              <div className={styles.statLabel}>Years of Ministry</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Chapters</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>44%</div>
              <div className={styles.statLabel}>Church Population</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className={styles.featuredEvents}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Upcoming Events</h2>
          <div className={styles.eventsGrid}>
            <div className={styles.eventCard}>
              <div className={styles.eventImage}>
                <img src="/api/placeholder/300/200" alt="Youth Conference" />
              </div>
              <div className={styles.eventContent}>
                <h3>Annual Youth Conference</h3>
                <p className={styles.eventDate}>October 5-7, 2025</p>
                <p className={styles.eventDescription}>
                  Join us for an inspiring weekend of worship, fellowship, and spiritual growth.
                </p>
                <Link to="/events" className={styles.eventLink}>Learn More</Link>
              </div>
            </div>
            
            <div className={styles.eventCard}>
              <div className={styles.eventImage}>
                <img src="/api/placeholder/300/200" alt="Bible Study" />
              </div>
              <div className={styles.eventContent}>
                <h3>Weekly Bible Study</h3>
                <p className={styles.eventDate}>Every Wednesday</p>
                <p className={styles.eventDescription}>
                  Deep dive into God's word with our weekly Bible study sessions.
                </p>
                <Link to="/events" className={styles.eventLink}>Learn More</Link>
              </div>
            </div>
            
            <div className={styles.eventCard}>
              <div className={styles.eventImage}>
                <img src="/api/placeholder/300/200" alt="Community Service" />
              </div>
              <div className={styles.eventContent}>
                <h3>Community Service Day</h3>
                <p className={styles.eventDate}>October 19, 2025</p>
                <p className={styles.eventDescription}>
                  Making a difference in our community through service and love.
                </p>
                <Link to="/events" className={styles.eventLink}>Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Your World?</h2>
            <p>
              Join our vibrant community of young people and be part of something greater. 
              Together, we can make a difference in our world through the power of God.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/register" className={styles.btnPrimary}>
                Become a Member
              </Link>
              <Link to="/contact" className={styles.btnSecondary}>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
