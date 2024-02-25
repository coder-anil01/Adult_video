import React from 'react'
import Homepage from './pages/Homepage'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <div style={{margin:'64px'}}></div>
      <Homepage/>
    </>
  )
}

export default App
