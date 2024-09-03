import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RegisterPage from './pages/Register'
// import App from './App.jsx'
// import LoginPage from './pages/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegisterPage />
  </StrictMode>,
)
