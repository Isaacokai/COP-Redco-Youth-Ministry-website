import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { submitContactForm, sendEmailNotification } from '../../services/formService'
import styles from './Contact.module.css'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data: any) => {
    try {
      // Submit form data
      const success = await submitContactForm(data)
      
      if (success) {
        // Send email notification
        await sendEmailNotification(data, 'contact')
        
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 10000)
      } else {
        // Handle submission error
        alert('There was an error submitting your message. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your message. Please try again or contact us directly.')
    }
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: 'Church of Pentecost\nAccra, Ghana'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: '+233 XX XXX XXXX\n+233 XX XXX XXXX'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: 'youth@redco.org\ninfo@redco.org'
    },
    {
      icon: '🕒',
      title: 'Service Times',
      details: 'Sunday: 9:00 AM\nWednesday: 7:00 PM'
    }
  ]

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us today!</p>
        </div>

        <div className={styles.contactContent}>
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <p>
              Have questions about our youth ministry? Want to join our community? 
              We're here to help and would love to connect with you.
            </p>
            
            <div className={styles.infoGrid}>
              {contactInfo.map((info, index) => (
                <div key={index} className={styles.infoCard}>
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <h3>{info.title}</h3>
                  <p>{info.details}</p>
                </div>
              ))}
            </div>

            <div className={styles.socialMedia}>
              <h3>Follow Us</h3>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                  <span className={styles.socialIcon}>📘</span>
                  Facebook
                </a>
                <a href="#" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                  <span className={styles.socialIcon}>📷</span>
                  Instagram
                </a>
                <a href="#" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                  <span className={styles.socialIcon}>📺</span>
                  YouTube
                </a>
                <a href="#" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                  <span className={styles.socialIcon}>🐦</span>
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.contactForm}>
            <h2>Send us a Message</h2>
            {isSubmitted && (
              <div className={styles.successMessage}>
                <h3>✅ Message Sent Successfully!</h3>
                <p>Thank you for contacting us! We have received your message and will get back to you within 24 hours.</p>
                <p><strong>What happens next?</strong></p>
                <ul>
                  <li>Our team will review your message</li>
                  <li>We'll respond via email or phone</li>
                  <li>If urgent, call us directly at +233 XX XXX XXXX</li>
                </ul>
              </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    {...register('firstName', { required: 'First name is required' })}
                    className={errors.firstName ? styles.error : ''}
                  />
                  {errors.firstName && (
                    <span className={styles.errorMessage}>{String(errors.firstName.message)}</span>
                  )}
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    {...register('lastName', { required: 'Last name is required' })}
                    className={errors.lastName ? styles.error : ''}
                  />
                  {errors.lastName && (
                    <span className={styles.errorMessage}>{String(errors.lastName.message)}</span>
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={errors.email ? styles.error : ''}
                />
                {errors.email && (
                  <span className={styles.errorMessage}>{String(errors.email.message)}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  {...register('subject', { required: 'Please select a subject' })}
                  className={errors.subject ? styles.error : ''}
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="membership">Membership Information</option>
                  <option value="events">Events & Activities</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="prayer">Prayer Request</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <span className={styles.errorMessage}>{String(errors.subject.message)}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters long'
                    }
                  })}
                  className={errors.message ? styles.error : ''}
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && (
                  <span className={styles.errorMessage}>{String(errors.message.message)}</span>
                )}
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
