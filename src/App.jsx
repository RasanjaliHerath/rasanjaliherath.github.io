import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './ThemeContext'
import LoadingPage from './LoadingPage'
import Navbar from './Navbar'
import Home from './Home/Home'
import About from './Aboutme/About'
import AllProject from './Projects/AllProject'
import FAQ from './FAQ'
import Contacts from './Contact/contacts'

import Footer from './Footer'
import './App.css'

function AppContent() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingPage onFinish={() => setLoading(false)} />}
      {!loading && (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<><Home /> </>   }  />
            <Route path="/projects" element={<AllProject />} />
            <Route path="/services" element={<FAQ />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/about" element={<About />} />
          </Routes>
          
          <Footer />
        </Router>
      )}
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
