import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
    <AboutPage />
    <ContactPage />
  </React.StrictMode>,
)
