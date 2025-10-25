import { useTheme } from '../../contexts/ThemeContext'
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button 
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className={`${styles.toggleTrack} ${theme === 'dark' ? styles.dark : ''}`}>
        <div className={styles.toggleThumb}>
          {theme === 'light' ? (
            <span className={styles.sunIcon}>☀️</span>
          ) : (
            <span className={styles.moonIcon}>🌙</span>
          )}
        </div>
      </div>
    </button>
  )
}

export default ThemeToggle
