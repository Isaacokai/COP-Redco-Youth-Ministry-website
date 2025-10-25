import styles from './Team.module.css'

const Team = () => {
  const leadership = [
    {
      name: "Apostle Ebenezer Hagan",
      title: "Youth Director",
      image: "/images/team/rectangle-2.jpg"
    },
    {
      name: "Elder Prof. Eric Appau Asante",
      title: "Deputy Youth Director",
      image: "/images/team/rectangle-3.png"
    },
    {
      name: "Pastor Gordon Ansah",
      title: "National Secretary",
      image: "/images/team/rectangle-4.png"
    },
    {
      name: "Pastor Philip Pascal Asiedu",
      title: "Nec Member",
      image: "/images/team/rectangle-7.png"
    },
    {
      name: "Elder Joseph Selorm Tetteh",
      title: "Nec Member",
      image: "/images/team/rectangle-8.png"
    },
    {
      name: "Dcns. Mrs. Comfort Worna",
      title: "Nec Member",
      image: "/images/team/rectangle-9.png"
    },
    {
      name: "Mrs. Priscilla Yirebi",
      title: "Nec Member",
      image: "/images/team/rectangle-10.png"
    },
    {
      name: "Elder Edward Ntiamoah",
      title: "Pensa Ghana Coordinator",
      image: "/images/team/rectangle-11.png"
    }
  ]

  return (
    <div className={styles.team}>
      {/* Featured Section */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.featuredContent}>
            <div className={styles.featuredImage}>
              <img src="/images/team/2.png" alt="Team Leadership" className={styles.featuredImg} />
            </div>
            <div className={styles.featuredText}>
              <h2 className={styles.featuredTitle}>Our Leadership Team</h2>
              <p className={styles.featuredDescription}>
                Meet the dedicated leaders who guide our youth ministry with wisdom, passion, and commitment to spiritual growth and community service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLine}></div>
          <h1 className={styles.title}>LEADERSHIP</h1>
        </div>
        
        <div className={styles.leadershipGrid}>
          {leadership.map((leader, index) => (
            <div key={index} className={styles.leaderCard}>
              <div className={styles.leaderImage}>
                <img src={leader.image} alt={leader.name} />
              </div>
              <h3 className={styles.leaderName}>{leader.name}</h3>
              <p className={styles.leaderTitle}>{leader.title}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.missionSection}>
          <h2>Our Mission</h2>
          <p>
            Our leadership team is committed to guiding and nurturing young people in their spiritual journey, 
            providing mentorship, and creating opportunities for growth and service in the Kingdom of God.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team
