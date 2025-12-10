import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../styles/globals.css'

// Debug: ensure entry renders
console.log('MyID+ app starting')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
