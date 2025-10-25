import { useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner'
import SkeletonLoader from './SkeletonLoader'
import styles from './PageLoader.module.css'

interface PageLoaderProps {
  isLoading: boolean
  children: React.ReactNode
  skeletonType?: 'home' | 'blog' | 'events' | 'gallery'
}

const PageLoader = ({ isLoading, children, skeletonType = 'home' }: PageLoaderProps) => {
  const [showContent, setShowContent] = useState(!isLoading)

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowContent(true), 300)
      return () => clearTimeout(timer)
    } else {
      setShowContent(false)
    }
  }, [isLoading])

  if (isLoading) {
    return (
      <div className={styles.pageLoader}>
        <div className={styles.loadingContent}>
          <LoadingSpinner size="large" text="Loading..." />
          <div className={styles.skeletonContainer}>
            {renderSkeletonContent(skeletonType)}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.pageContent} ${showContent ? styles.fadeIn : ''}`}>
      {children}
    </div>
  )
}

const renderSkeletonContent = (type: string) => {
  switch (type) {
    case 'home':
      return (
        <>
          <SkeletonLoader type="image" width="100%" height="300px" />
          <div className={styles.skeletonGrid}>
            <SkeletonLoader type="card" width="100%" height="200px" />
            <SkeletonLoader type="card" width="100%" height="200px" />
            <SkeletonLoader type="card" width="100%" height="200px" />
          </div>
        </>
      )
    case 'blog':
      return (
        <>
          <SkeletonLoader type="text" lines={3} width="100%" />
          <div className={styles.skeletonGrid}>
            <SkeletonLoader type="card" width="100%" height="250px" />
            <SkeletonLoader type="card" width="100%" height="250px" />
            <SkeletonLoader type="card" width="100%" height="250px" />
          </div>
        </>
      )
    case 'events':
      return (
        <>
          <SkeletonLoader type="text" lines={2} width="100%" />
          <div className={styles.skeletonGrid}>
            <SkeletonLoader type="card" width="100%" height="150px" />
            <SkeletonLoader type="card" width="100%" height="150px" />
            <SkeletonLoader type="card" width="100%" height="150px" />
          </div>
        </>
      )
    case 'gallery':
      return (
        <div className={styles.skeletonGrid}>
          <SkeletonLoader type="image" width="100%" height="200px" />
          <SkeletonLoader type="image" width="100%" height="200px" />
          <SkeletonLoader type="image" width="100%" height="200px" />
          <SkeletonLoader type="image" width="100%" height="200px" />
          <SkeletonLoader type="image" width="100%" height="200px" />
          <SkeletonLoader type="image" width="100%" height="200px" />
        </div>
      )
    default:
      return <SkeletonLoader type="text" lines={5} width="100%" />
  }
}

export default PageLoader
