import styles from './Team.module.css'

const Team = () => {
  const leadership = [
    {
      name: "Apostle Ebenezer Hagan",
      title: "Youth Director",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Elder Prof. Eric Appau Asante",
      title: "Deputy Youth Director",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Pastor Gordon Ansah",
      title: "National Secretary",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Pastor Philip Pascal Asiedu",
      title: "Nec Member",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Elder Joseph Selorm Tetteh",
      title: "Nec Member",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Dcns. Mrs. Comfort Worna",
      title: "Nec Member",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Mrs. Priscilla Yirebi",
      title: "Nec Member",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Elder Edward Ntiamoah",
      title: "Pensa Ghana Coordinator",
      image: "/api/placeholder/200/200"
    }
  ]

  return (
    <div className={styles.team}>
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
