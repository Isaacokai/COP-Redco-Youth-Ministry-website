import styles from './SkeletonLoader.module.css'

interface SkeletonLoaderProps {
  type?: 'text' | 'card' | 'image' | 'button'
  width?: string
  height?: string
  lines?: number
}

const SkeletonLoader = ({ 
  type = 'text', 
  width = '100%', 
  height = '1rem',
  lines = 1 
}: SkeletonLoaderProps) => {
  if (type === 'card') {
    return (
      <div className={styles.cardSkeleton} style={{ width, height }}>
        <div className={styles.cardImage}></div>
        <div className={styles.cardContent}>
          <div className={styles.cardTitle}></div>
          <div className={styles.cardText}></div>
          <div className={styles.cardText}></div>
        </div>
      </div>
    )
  }

  if (type === 'image') {
    return (
      <div 
        className={styles.imageSkeleton} 
        style={{ width, height }}
      ></div>
    )
  }

  if (type === 'button') {
    return (
      <div 
        className={styles.buttonSkeleton} 
        style={{ width, height }}
      ></div>
    )
  }

  // Text skeleton
  return (
    <div className={styles.textSkeleton}>
      {Array.from({ length: lines }).map((_, index) => (
        <div 
          key={index}
          className={styles.textLine}
          style={{ 
            width: index === lines - 1 ? '60%' : '100%',
            height 
          }}
        ></div>
      ))}
    </div>
  )
}

export default SkeletonLoader
