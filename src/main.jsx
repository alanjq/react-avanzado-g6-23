import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import SaludoPage from './SaludoPage'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Creamos el Router para cargar la página de HomePage */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="saludo" element={<SaludoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
