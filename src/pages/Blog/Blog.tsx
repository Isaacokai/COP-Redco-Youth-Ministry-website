import { useState } from 'react'
import styles from './Blog.module.css'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'devotion', name: 'Devotionals' },
    { id: 'news', name: 'News' },
    { id: 'testimony', name: 'Testimonies' },
    { id: 'teaching', name: 'Teachings' }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Walking in Faith: A Youth's Journey",
      excerpt: "Discover how young people are finding their purpose and calling in today's world through faith and determination.",
      content: "In a world filled with uncertainty and challenges, young people are finding strength and direction through their faith. This journey of discovery is not always easy, but it is filled with hope and purpose...",
      author: "Pastor Sarah Mensah",
      date: "March 15, 2024",
      category: "devotion",
      image: "./api/placeholder/400/250",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Annual Youth Conference 2024: A Success Story",
      excerpt: "Over 2,000 young people gathered for an inspiring weekend of worship, fellowship, and spiritual growth.",
      content: "The 2024 Annual Youth Conference was a remarkable success, bringing together young people from across the region for a weekend of spiritual renewal and fellowship...",
      author: "Youth Ministry Team",
      date: "March 10, 2024",
      category: "news",
      image: "./images/home/Youth Ministry Gathering.png",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "From Darkness to Light: A Personal Testimony",
      excerpt: "A young person shares their powerful story of transformation and redemption through faith.",
      content: "My name is Kwame, and I want to share with you how God transformed my life from a place of darkness and despair to one of hope and purpose...",
      author: "Kwame Asante",
      date: "March 8, 2024",
      category: "testimony",
      image: "./api/placeholder/400/250",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Understanding God's Love for Young People",
      excerpt: "A deep dive into how God's unconditional love speaks to the hearts of young believers today.",
      content: "God's love is not conditional on our age, our past, or our circumstances. It is a love that reaches out to every young heart, offering hope and transformation...",
      author: "Elder Joseph Tetteh",
      date: "March 5, 2024",
      category: "teaching",
      image: "./api/placeholder/400/250",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Community Service: Making a Difference Together",
      excerpt: "How our youth ministry is impacting the community through service and love.",
      content: "Service to others is not just a duty; it's a privilege and a way to demonstrate God's love in action. Our youth ministry has been actively involved in various community service projects...",
      author: "Community Service Team",
      date: "March 3, 2024",
      category: "news",
      image: "./api/placeholder/400/250",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Prayer: The Foundation of Spiritual Growth",
      excerpt: "Exploring the importance of prayer in the life of a young Christian and practical ways to develop a prayer life.",
      content: "Prayer is not just a religious ritual; it's a conversation with our Heavenly Father. For young people, developing a consistent prayer life can be challenging but incredibly rewarding...",
      author: "Pastor Gordon Ansah",
      date: "March 1, 2024",
      category: "teaching",
      image: "./api/placeholder/400/250",
      readTime: "8 min read"
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      devotion: '#28a745',
      news: '#007bff',
      testimony: '#dc3545',
      teaching: '#6f42c1'
    }
    return colors[category] || '#6c757d'
  }

  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Blog & News</h1>
          <p>Stay updated with inspiring stories, teachings, and news from our youth ministry</p>
        </div>

        {/* Category Filter */}
        <div className={styles.categoryFilter}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.categoryBtn} ${selectedCategory === category.id ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              style={selectedCategory === category.id ? { 
                backgroundColor: getCategoryColor(category.id),
                borderColor: getCategoryColor(category.id)
              } : {}}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className={styles.featuredPost}>
            <div className={styles.featuredImage}>
              <img src={filteredPosts[0].image} alt={filteredPosts[0].title} />
              <div className={styles.featuredOverlay}>
                <span 
                  className={styles.featuredCategory}
                  style={{ backgroundColor: getCategoryColor(filteredPosts[0].category) }}
                >
                  {categories.find(cat => cat.id === filteredPosts[0].category)?.name}
                </span>
              </div>
            </div>
            <div className={styles.featuredContent}>
              <h2>{filteredPosts[0].title}</h2>
              <p className={styles.featuredExcerpt}>{filteredPosts[0].excerpt}</p>
              <div className={styles.featuredMeta}>
                <span className={styles.author}>By {filteredPosts[0].author}</span>
                <span className={styles.date}>{filteredPosts[0].date}</span>
                <span className={styles.readTime}>{filteredPosts[0].readTime}</span>
              </div>
              <button className={styles.readMoreBtn}>Read More</button>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className={styles.postsGrid}>
          {filteredPosts.slice(1).map(post => (
            <article key={post.id} className={styles.postCard}>
              <div className={styles.postImage}>
                <img src={post.image} alt={post.title} />
                <div className={styles.postOverlay}>
                  <span 
                    className={styles.postCategory}
                    style={{ backgroundColor: getCategoryColor(post.category) }}
                  >
                    {categories.find(cat => cat.id === post.category)?.name}
                  </span>
                </div>
              </div>
              <div className={styles.postContent}>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postMeta}>
                  <span className={styles.postAuthor}>{post.author}</span>
                  <span className={styles.postDate}>{post.date}</span>
                  <span className={styles.postReadTime}>{post.readTime}</span>
                </div>
                <button className={styles.readMoreBtn}>Read More</button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter to receive the latest blog posts and ministry updates directly in your inbox.</p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterBtn}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
