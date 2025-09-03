import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Styles
import './index.css'

// Components
import { ErrorBoundary } from './components/error-boundary'

// Pages
import { App } from './App.tsx'
import { PrivacyPolicy } from './PrivacyPolicy.tsx'
import { ComingSoon } from './ComingSoon.tsx'
import { NotFound } from './NotFound.tsx'

// Get the root element
const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
