import { useState } from 'react'
import styles from './Gallery.module.css'

interface Photo {
  id: number
  src: string
  alt: string
  category: string
  title: string
  date: string
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Events' },
    { id: 'worship', name: 'Worship' },
    { id: 'fellowship', name: 'Fellowship' },
    { id: 'service', name: 'Community Service' }
  ]

  const photos = [
    {
      id: 1,
      src: '/images/home/Youth Ministry Gathering.png',
      alt: 'Youth Conference 2024',
      category: 'events',
      title: 'Annual Youth Conference',
      date: 'March 2024'
    },
    {
      id: 2,
      src: '/api/placeholder/400/300',
      alt: 'Sunday Worship Service',
      category: 'worship',
      title: 'Sunday Worship Service',
      date: 'February 2024'
    },
    {
      id: 3,
      src: '/images/home/Youth Ministry Gathering.png',
      alt: 'Youth Fellowship',
      category: 'fellowship',
      title: 'Youth Fellowship Night',
      date: 'February 2024'
    },
    {
      id: 4,
      src: '/api/placeholder/400/300',
      alt: 'Community Service',
      category: 'service',
      title: 'Community Clean-up',
      date: 'January 2024'
    },
    {
      id: 5,
      src: '/api/placeholder/400/300',
      alt: 'Bible Study Session',
      category: 'events',
      title: 'Weekly Bible Study',
      date: 'January 2024'
    },
    {
      id: 6,
      src: '/api/placeholder/400/300',
      alt: 'Prayer Meeting',
      category: 'worship',
      title: 'Youth Prayer Meeting',
      date: 'January 2024'
    },
    {
      id: 7,
      src: '/api/placeholder/400/300',
      alt: 'Youth Camp',
      category: 'events',
      title: 'Youth Camp 2024',
      date: 'December 2023'
    },
    {
      id: 8,
      src: '/api/placeholder/400/300',
      alt: 'Christmas Celebration',
      category: 'fellowship',
      title: 'Christmas Celebration',
      date: 'December 2023'
    },
    {
      id: 9,
      src: '/api/placeholder/400/300',
      alt: 'Food Drive',
      category: 'service',
      title: 'Food Drive Initiative',
      date: 'November 2023'
    },
    {
      id: 10,
      src: '/api/placeholder/400/300',
      alt: 'Youth Choir',
      category: 'worship',
      title: 'Youth Choir Performance',
      date: 'November 2023'
    },
    {
      id: 11,
      src: '/api/placeholder/400/300',
      alt: 'Leadership Training',
      category: 'events',
      title: 'Leadership Training Workshop',
      date: 'October 2023'
    },
    {
      id: 12,
      src: '/api/placeholder/400/300',
      alt: 'Mission Trip',
      category: 'service',
      title: 'Mission Trip to Northern Region',
      date: 'October 2023'
    }
  ]

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory)

  const openModal = (photo: Photo) => {
    setSelectedImage(photo)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedImage.id)
      const nextIndex = (currentIndex + 1) % filteredPhotos.length
      setSelectedImage(filteredPhotos[nextIndex])
    }
  }

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedImage.id)
      const prevIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1
      setSelectedImage(filteredPhotos[prevIndex])
    }
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Photo Gallery</h1>
          <p>Capturing moments of faith, fellowship, and service</p>
        </div>

        {/* Category Filter */}
        <div className={styles.categoryFilter}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.categoryBtn} ${selectedCategory === category.id ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className={styles.photoGrid}>
          {filteredPhotos.map(photo => (
            <div 
              key={photo.id} 
              className={styles.photoItem}
              onClick={() => openModal(photo)}
            >
              <div className={styles.photoContainer}>
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className={styles.photo}
                />
                <div className={styles.photoOverlay}>
                  <h3>{photo.title}</h3>
                  <p>{photo.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeBtn} onClick={closeModal}>
                ×
              </button>
              <button className={styles.prevBtn} onClick={prevImage}>
                ‹
              </button>
              <button className={styles.nextBtn} onClick={nextImage}>
                ›
              </button>
              <div className={styles.modalImage}>
                <img src={selectedImage.src} alt={selectedImage.alt} />
              </div>
              <div className={styles.modalInfo}>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.date}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery
