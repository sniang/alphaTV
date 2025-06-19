/**
 * Entry point for the React application.
 * 
 * - Imports React's StrictMode for highlighting potential problems in the application.
 * - Uses React 18's createRoot API to render the App component into the DOM element with id 'root'.
 * - Imports global CSS styles from './styles/index.css'.
 *
 * @author Samuel Niang
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
