import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import App from './pages/App.jsx'
import Impressum from './pages/Impressum.jsx'
import Datenschutz from './pages/Datenschutz.jsx'
import AGB from './pages/AGB.jsx'
import Widerruf from './pages/Widerruf.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/impressum' element={<Impressum />} />
        <Route path='/datenschutz' element={<Datenschutz />} />
        <Route path='/agb' element={<AGB />} />
        <Route path='/widerruf' element={<Widerruf />} />
        <Route path='*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
