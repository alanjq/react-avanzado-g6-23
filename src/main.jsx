import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Creamos el Router para cargar la página de HomePage */}
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
