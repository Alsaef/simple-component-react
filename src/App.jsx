import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LandingPage from './pages/LandingPage'
import StudentPage from './pages/StudentPage'
import Footer from './Components/Footer'

function App() {

  return (
    <div>
    <LandingPage></LandingPage>
    <StudentPage></StudentPage>
    <Footer></Footer>
    </div>
  )
}

export default App
