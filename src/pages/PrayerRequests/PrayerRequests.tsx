import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { submitContactForm, sendEmailNotification } from '../../services/formService'
import LoadingSpinner from '../../components/Loading/LoadingSpinner'
import styles from './PrayerRequests.module.css'

const PrayerRequests = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data: any) => {
    setIsLoading(true)
    try {
      // Submit prayer request
      const success = await submitContactForm({
        ...data,
        subject: 'Prayer Request',
        message: `Prayer Request: ${data.prayerRequest}\n\nType: ${data.prayerType}\n\nUrgency: ${data.urgency}`
      })
      
      if (success) {
        // Send email notification
        await sendEmailNotification(data, 'prayer')
        
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 15000)
      } else {
        alert('There was an error submitting your prayer request. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error submitting prayer request:', error)
      alert('There was an error submitting your prayer request. Please try again or contact us directly.')
    } finally {
      setIsLoading(false)
    }
  }

  const prayerTypes = [
    { value: 'healing', label: 'Healing & Health' },
    { value: 'guidance', label: 'Guidance & Direction' },
    { value: 'family', label: 'Family & Relationships' },
    { value: 'finances', label: 'Financial Provision' },
    { value: 'spiritual', label: 'Spiritual Growth' },
    { value: 'ministry', label: 'Ministry & Service' },
    { value: 'protection', label: 'Protection & Safety' },
    { value: 'other', label: 'Other' }
  ]

  const urgencyLevels = [
    { value: 'low', label: 'Low - General prayer' },
    { value: 'medium', label: 'Medium - Important but not urgent' },
    { value: 'high', label: 'High - Needs immediate attention' },
    { value: 'urgent', label: 'Urgent - Critical situation' }
  ]

  return (
    <div className={styles.prayerRequests}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Prayer Requests</h1>
          <p>Share your prayer needs with our community. We believe in the power of prayer and are committed to lifting you up in prayer.</p>
        </div>

        <div className={styles.content}>
          {/* Prayer Request Form */}
          <div className={styles.prayerForm}>
            <div className={styles.formHeader}>
              <h2>Submit a Prayer Request</h2>
              <p>Your prayer request will be shared with our prayer team and ministry leaders.</p>
            </div>

            {isSubmitted && (
              <div className={styles.successMessage}>
                <h3>🙏 Prayer Request Submitted!</h3>
                <p>Thank you for sharing your prayer need with us. Our prayer team will begin praying for you immediately.</p>
                <p><strong>What happens next?</strong></p>
                <ul>
                  <li>Our prayer team will pray for your request</li>
                  <li>You may receive follow-up from our ministry team</li>
                  <li>We'll keep your request confidential unless you specify otherwise</li>
                  <li>For urgent requests, we'll prioritize immediate prayer</li>
                </ul>
                <p><strong>Need immediate prayer?</strong><br />
                📞 Call us at +233 XX XXX XXXX</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              {/* Personal Information */}
              <div className={styles.formSection}>
                <h3>Your Information</h3>
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
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    placeholder="Optional - for follow-up"
                  />
                </div>
              </div>

              {/* Prayer Details */}
              <div className={styles.formSection}>
                <h3>Prayer Request Details</h3>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="prayerType">Type of Prayer *</label>
                    <select
                      id="prayerType"
                      {...register('prayerType', { required: 'Please select prayer type' })}
                      className={errors.prayerType ? styles.error : ''}
                    >
                      <option value="">Select Prayer Type</option>
                      {prayerTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.prayerType && (
                      <span className={styles.errorMessage}>{String(errors.prayerType.message)}</span>
                    )}
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="urgency">Urgency Level *</label>
                    <select
                      id="urgency"
                      {...register('urgency', { required: 'Please select urgency level' })}
                      className={errors.urgency ? styles.error : ''}
                    >
                      <option value="">Select Urgency</option>
                      {urgencyLevels.map(level => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                    {errors.urgency && (
                      <span className={styles.errorMessage}>{String(errors.urgency.message)}</span>
                    )}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="prayerRequest">Prayer Request *</label>
                  <textarea
                    id="prayerRequest"
                    rows={6}
                    {...register('prayerRequest', { 
                      required: 'Please share your prayer request',
                      minLength: {
                        value: 10,
                        message: 'Please provide more details (at least 10 characters)'
                      }
                    })}
                    className={errors.prayerRequest ? styles.error : ''}
                    placeholder="Please share your prayer request in detail. The more specific you are, the better we can pray for you..."
                  />
                  {errors.prayerRequest && (
                    <span className={styles.errorMessage}>{String(errors.prayerRequest.message)}</span>
                  )}
                </div>

                <div className={styles.checkboxGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      {...register('confidential')}
                    />
                    <span className={styles.checkmark}></span>
                    Keep this request confidential (only prayer team will see it)
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner size="small" />
                    <span>Submitting Prayer Request...</span>
                  </>
                ) : (
                  'Submit Prayer Request'
                )}
              </button>
            </form>
          </div>

          {/* Prayer Information */}
          <div className={styles.prayerInfo}>
            <h2>Our Prayer Ministry</h2>
            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🙏</div>
                <h3>Prayer Team</h3>
                <p>Our dedicated prayer team meets regularly to pray for all submitted requests.</p>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>⏰</div>
                <h3>24/7 Prayer</h3>
                <p>We have prayer warriors available around the clock for urgent requests.</p>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🤝</div>
                <h3>Community Support</h3>
                <p>Join our prayer community to support others and receive prayer support.</p>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📞</div>
                <h3>Emergency Prayer</h3>
                <p>For urgent situations, call our prayer hotline at +233 XX XXX XXXX</p>
              </div>
            </div>

            <div className={styles.prayerVerses}>
              <h3>Scripture for Prayer</h3>
              <blockquote>
                "Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours."
                <cite>- Mark 11:24</cite>
              </blockquote>
              <blockquote>
                "And pray in the Spirit on all occasions with all kinds of prayers and requests. With this in mind, be alert and always keep on praying for all the Lord's people."
                <cite>- Ephesians 6:18</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrayerRequests
