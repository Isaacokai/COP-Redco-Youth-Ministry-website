import { useState } from 'react'
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from 'date-fns'
import styles from './Events.module.css'

const Events = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1)) // Start at October 2025
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)

  const events = [
    {
      id: 1,
      title: "Annual Youth Conference",
      date: new Date(2025, 9, 5), // October 5, 2025
      time: "9:00 AM - 5:00 PM",
      location: "Accra International Conference Centre",
      description: "Join us for an inspiring weekend of worship, fellowship, and spiritual growth.",
      type: "conference"
    },
    {
      id: 2,
      title: "Weekly Bible Study",
      date: new Date(2025, 9, 12), // October 12, 2025
      time: "7:00 PM - 8:30 PM",
      location: "Main Sanctuary",
      description: "Deep dive into God's word with our weekly Bible study sessions.",
      type: "study"
    },
    {
      id: 3,
      title: "Community Service Day",
      date: new Date(2025, 9, 19), // October 19, 2025
      time: "8:00 AM - 2:00 PM",
      location: "Various Locations",
      description: "Making a difference in our community through service and love.",
      type: "service"
    },
    {
      id: 4,
      title: "Youth Prayer Meeting",
      date: new Date(2025, 9, 26), // October 26, 2025
      time: "6:00 PM - 7:30 PM",
      location: "Youth Hall",
      description: "Come together in prayer and worship.",
      type: "prayer"
    }
  ]

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  
  // Get the start of the week for the first day of the month
  const calendarStart = new Date(monthStart)
  calendarStart.setDate(calendarStart.getDate() - calendarStart.getDay())
  
  // Get the end of the week for the last day of the month
  const calendarEnd = new Date(monthEnd)
  calendarEnd.setDate(calendarEnd.getDate() + (6 - calendarEnd.getDay()))
  
  const calendarDays = eachDayOfInterval({ start: calendarStart, end: calendarEnd })

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1))
  }

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1))
  }

  const getEventsForDate = (date) => {
    return events.filter(event => isSameDay(event.date, date))
  }

  const getEventTypeClass = (type) => {
    const typeClasses = {
      conference: styles.conference,
      study: styles.study,
      service: styles.service,
      prayer: styles.prayer
    }
    return typeClasses[type] || ''
  }

  const handleDateClick = (date) => {
    setSelectedDate(date)
    const dayEvents = getEventsForDate(date)
    if (dayEvents.length > 0) {
      setSelectedEvent(dayEvents[0]) // Show first event for that day
    }
  }

  const isDateSelected = (date) => {
    return selectedDate && isSameDay(date, selectedDate)
  }

  return (
    <div className={styles.events}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Events & Calendar</h1>
          <p>Stay updated with our upcoming events and activities</p>
        </div>

        <div className={styles.eventsContent}>
          {/* Calendar */}
          <div className={styles.calendarSection}>
            <div className={styles.calendarHeader}>
              <button onClick={prevMonth} className={styles.calendarNav}>
                ← Previous
              </button>
              <h2>{format(currentDate, 'MMMM yyyy')}</h2>
              <button onClick={nextMonth} className={styles.calendarNav}>
                Next →
              </button>
            </div>
            
            <div className={styles.calendar}>
              <div className={styles.calendarDays}>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className={styles.dayHeader}>{day}</div>
                ))}
              </div>
              
              <div className={styles.calendarGrid}>
                {calendarDays.map((day, index) => {
                  const dayEvents = getEventsForDate(day)
                  const isCurrentMonth = isSameMonth(day, currentDate)
                  const isTodayDate = isToday(day)
                  
                  return (
                    <div 
                      key={index} 
                      className={`${styles.calendarDay} ${!isCurrentMonth ? styles.otherMonth : ''} ${isTodayDate ? styles.today : ''} ${isDateSelected(day) ? styles.selected : ''}`}
                      onClick={() => handleDateClick(day)}
                    >
                      <span className={styles.dayNumber}>{format(day, 'd')}</span>
                      {dayEvents.length > 0 && (
                        <div className={styles.dayEvents}>
                          {dayEvents.slice(0, 2).map(event => (
                            <div 
                              key={event.id} 
                              className={`${styles.eventDot} ${getEventTypeClass(event.type)}`}
                              title={event.title}
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedEvent(event)
                              }}
                            />
                          ))}
                          {dayEvents.length > 2 && (
                            <span className={styles.moreEvents}>+{dayEvents.length - 2}</span>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className={styles.eventsList}>
            <div className={styles.eventsListHeader}>
              <h3>
                {selectedDate ? `Events for ${format(selectedDate, 'MMMM d, yyyy')}` : 'Upcoming Events'}
              </h3>
              {selectedDate && (
                <button 
                  className={styles.clearBtn}
                  onClick={() => setSelectedDate(null)}
                >
                  Show All Events
                </button>
              )}
            </div>
            <div className={styles.eventsGrid}>
              {(selectedDate ? getEventsForDate(selectedDate) : events).map(event => (
                <div key={event.id} className={styles.eventCard}>
                  <div className={styles.eventDate}>
                    <span className={styles.eventDay}>{format(event.date, 'd')}</span>
                    <span className={styles.eventMonth}>{format(event.date, 'MMM')}</span>
                  </div>
                  <div className={styles.eventDetails}>
                    <h4>{event.title}</h4>
                    <p className={styles.eventTime}>{event.time}</p>
                    <p className={styles.eventLocation}>{event.location}</p>
                    <p className={styles.eventDescription}>{event.description}</p>
                    <button 
                      className={`${styles.registerBtn} ${getEventTypeClass(event.type)}`}
                      onClick={() => setSelectedEvent(event)}
                    >
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event Registration Modal */}
        {selectedEvent && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <button 
                className={styles.closeBtn}
                onClick={() => setSelectedEvent(null)}
              >
                ×
              </button>
              <h3>Register for {selectedEvent.title}</h3>
              <div className={styles.eventInfo}>
                <p><strong>Date:</strong> {format(selectedEvent.date, 'MMMM d, yyyy')}</p>
                <p><strong>Time:</strong> {selectedEvent.time}</p>
                <p><strong>Location:</strong> {selectedEvent.location}</p>
                <p><strong>Description:</strong> {selectedEvent.description}</p>
              </div>
              <form className={styles.registrationForm}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input type="text" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input type="email" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Phone Number</label>
                  <input type="tel" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Age Group</label>
                  <select required>
                    <option value="">Select Age Group</option>
                    <option value="13-17">13-17 years</option>
                    <option value="18-25">18-25 years</option>
                    <option value="26-35">26-35 years</option>
                  </select>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Register Now
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Events
