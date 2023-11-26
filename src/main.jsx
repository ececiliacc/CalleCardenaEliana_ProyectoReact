import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { inicializarFirebase } from './firebase/configFirebase.js'
// import './index.css'
inicializarFirebase()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
