import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { submitRegistrationForm, sendEmailNotification } from '../../services/formService'
import styles from './MemberRegistration.module.css'

const MemberRegistration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data: any) => {
    try {
      // Submit registration data
      const success = await submitRegistrationForm(data)
      
      if (success) {
        // Send email notification
        await sendEmailNotification(data, 'registration')
        
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 15000)
      } else {
        // Handle submission error
        alert('There was an error submitting your registration. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error submitting registration:', error)
      alert('There was an error submitting your registration. Please try again or contact us directly.')
    }
  }

  const benefits = [
    {
      icon: '🙏',
      title: 'Spiritual Growth',
      description: 'Join a community focused on deepening your relationship with God'
    },
    {
      icon: '👥',
      title: 'Fellowship',
      description: 'Connect with like-minded young people on similar spiritual journeys'
    },
    {
      icon: '🎯',
      title: 'Purpose & Direction',
      description: 'Discover your calling and purpose through mentorship and guidance'
    },
    {
      icon: '🌟',
      title: 'Leadership Development',
      description: 'Develop leadership skills and serve in various ministry capacities'
    },
    {
      icon: '🎉',
      title: 'Events & Activities',
      description: 'Participate in exciting events, conferences, and community service'
    },
    {
      icon: '📚',
      title: 'Learning Opportunities',
      description: 'Access to Bible studies, workshops, and educational programs'
    }
  ]

  return (
    <div className={styles.registration}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Join Our Youth Ministry</h1>
          <p>Become part of a vibrant community of young people committed to serving God and transforming their world.</p>
        </div>

        <div className={styles.registrationContent}>
          {/* Benefits Section */}
          <div className={styles.benefitsSection}>
            <h2>Why Join Our Youth Ministry?</h2>
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className={styles.registrationForm}>
            <div className={styles.formHeader}>
              <h2>Member Registration</h2>
              <p>Fill out the form below to join our youth ministry community.</p>
            </div>

            {isSubmitted && (
              <div className={styles.successMessage}>
                <h3>🎉 Registration Successful!</h3>
                <p>Welcome to our youth ministry family! Your registration has been received and is being processed.</p>
                <p><strong>What happens next?</strong></p>
                <ul>
                  <li>Our team will review your registration within 24 hours</li>
                  <li>You'll receive a welcome email with ministry details</li>
                  <li>We'll add you to our WhatsApp group for updates</li>
                  <li>You'll be invited to our next youth meeting</li>
                </ul>
                <p><strong>Contact us if you have questions:</strong><br />
                📞 +233 XX XXX XXXX | ✉️ youth@redco.org</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              {/* Personal Information */}
              <div className={styles.formSection}>
                <h3>Personal Information</h3>
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

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="dateOfBirth">Date of Birth *</label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      {...register('dateOfBirth', { required: 'Date of birth is required' })}
                      className={errors.dateOfBirth ? styles.error : ''}
                    />
                    {errors.dateOfBirth && (
                      <span className={styles.errorMessage}>{String(errors.dateOfBirth.message)}</span>
                    )}
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="gender">Gender *</label>
                    <select
                      id="gender"
                      {...register('gender', { required: 'Please select your gender' })}
                      className={errors.gender ? styles.error : ''}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.gender && (
                      <span className={styles.errorMessage}>{String(errors.gender.message)}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className={styles.formSection}>
                <h3>Contact Information</h3>
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

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone', { required: 'Phone number is required' })}
                      className={errors.phone ? styles.error : ''}
                    />
                    {errors.phone && (
                      <span className={styles.errorMessage}>{String(errors.phone.message)}</span>
                    )}
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="whatsapp">WhatsApp Number</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      {...register('whatsapp')}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="address">Home Address *</label>
                <textarea
                  id="address"
                  rows={3}
                    {...register('address', { required: 'Address is required' })}
                    className={errors.address ? styles.error : ''}
                    placeholder="Please provide your complete home address"
                  />
                  {errors.address && (
                    <span className={styles.errorMessage}>{String(errors.address.message)}</span>
                  )}
                </div>
              </div>

              {/* Church Information */}
              <div className={styles.formSection}>
                <h3>Church Information</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="churchName">Church Name *</label>
                  <input
                    type="text"
                    id="churchName"
                    {...register('churchName', { required: 'Church name is required' })}
                    className={errors.churchName ? styles.error : ''}
                    placeholder="e.g., Church of Pentecost - Accra Central"
                  />
                  {errors.churchName && (
                    <span className={styles.errorMessage}>{String(errors.churchName.message)}</span>
                  )}
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="membershipDuration">How long have you been a member? *</label>
                    <select
                      id="membershipDuration"
                      {...register('membershipDuration', { required: 'Please select membership duration' })}
                      className={errors.membershipDuration ? styles.error : ''}
                    >
                      <option value="">Select Duration</option>
                      <option value="new">New Member (Less than 1 year)</option>
                      <option value="1-2">1-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">More than 5 years</option>
                    </select>
                    {errors.membershipDuration && (
                      <span className={styles.errorMessage}>{String(errors.membershipDuration.message)}</span>
                    )}
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="ministryInterest">Ministry Interest</label>
                    <select
                      id="ministryInterest"
                      {...register('ministryInterest')}
                    >
                      <option value="">Select Interest</option>
                      <option value="worship">Worship & Music</option>
                      <option value="evangelism">Evangelism</option>
                      <option value="children">Children's Ministry</option>
                      <option value="media">Media & Technology</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="prayer">Prayer Ministry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className={styles.formSection}>
                <h3>Additional Information</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="testimony">Personal Testimony (Optional)</label>
                <textarea
                  id="testimony"
                  rows={4}
                    {...register('testimony')}
                    placeholder="Share your faith journey and what God has done in your life..."
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="expectations">What do you hope to gain from joining our youth ministry?</label>
                <textarea
                  id="expectations"
                  rows={3}
                    {...register('expectations')}
                    placeholder="Tell us about your goals and expectations..."
                  />
                </div>

                <div className={styles.checkboxGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      {...register('newsletter', { required: 'Please agree to receive newsletters' })}
                      className={errors.newsletter ? styles.error : ''}
                    />
                    <span className={styles.checkmark}></span>
                    I would like to receive newsletters and updates about youth ministry activities *
                  </label>
                  {errors.newsletter && (
                    <span className={styles.errorMessage}>{String(errors.newsletter.message)}</span>
                  )}
                </div>

                <div className={styles.checkboxGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      {...register('terms', { required: 'Please accept the terms and conditions' })}
                      className={errors.terms ? styles.error : ''}
                    />
                    <span className={styles.checkmark}></span>
                    I agree to the terms and conditions and privacy policy *
                  </label>
                  {errors.terms && (
                    <span className={styles.errorMessage}>{String(errors.terms.message)}</span>
                  )}
                </div>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberRegistration
