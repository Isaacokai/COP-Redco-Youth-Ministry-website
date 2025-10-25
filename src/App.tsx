import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Team from './pages/Team/Team'
import Events from './pages/Events/Events'
import Gallery from './pages/Gallery/Gallery'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import MemberRegistration from './pages/MemberRegistration/MemberRegistration'
import PrayerRequests from './pages/PrayerRequests/PrayerRequests'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/events" element={<Events />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<MemberRegistration />} />
              <Route path="/prayer" element={<PrayerRequests />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
