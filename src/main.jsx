import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './main.module.css'
import {Store}from "./context/context.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
)
