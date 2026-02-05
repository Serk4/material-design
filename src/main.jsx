import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MaterialShowcase from './MaterialShowcase.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MaterialShowcase />
  </StrictMode>,
)
