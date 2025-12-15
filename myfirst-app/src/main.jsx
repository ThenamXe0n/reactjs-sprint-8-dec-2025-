import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' //used to create root for rendering React components virtual dom
import App from './App.jsx' //component import
import "./index.css"

createRoot(document.getElementById('root'))//creating root element 
.render( //this will render the app component inside the root element i,e screen
  <StrictMode>
    <App />
  </StrictMode>,
)
