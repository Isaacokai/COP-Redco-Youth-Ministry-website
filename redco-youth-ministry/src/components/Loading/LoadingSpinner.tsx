import styles from './LoadingSpinner.module.css'

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large'
  text?: string
}

const LoadingSpinner = ({ size = 'medium', text }: LoadingSpinnerProps) => {
  return (
    <div className={styles.loadingContainer}>
      <div className={`${styles.spinner} ${styles[size]}`}>
        <div className={styles.spinnerInner}></div>
      </div>
      {text && <p className={styles.loadingText}>{text}</p>}
    </div>
  )
}

export default LoadingSpinner
