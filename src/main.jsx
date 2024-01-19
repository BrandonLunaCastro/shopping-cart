import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./router/Root";
import  "./assets/reset.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Root />
  </React.StrictMode>,
)
