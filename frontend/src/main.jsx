import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthContextProvider } from './context/authContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css' 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <Router>
        <App />
      </Router>
    </AuthContextProvider>
  </StrictMode>,
)
