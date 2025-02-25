import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/index.css"
import { BookCatalog } from './pages/BookCatalog'
import { Dashboard } from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthPractice } from './pages/AuthPractice'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPractice />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/book-catalog" element={<BookCatalog />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
