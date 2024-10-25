import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Hero from './about.tsx'
import Experience from './experince.tsx'
import Footer from './footer.tsx'
// import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hero/>
    <App />
    <Experience/>
    <Footer/>
  </StrictMode>,
)
