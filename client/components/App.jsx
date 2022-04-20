import React, { useState } from 'react'

// import { Route, Routes, Outlet } from 'react-router-dom'
import useFetchKai from './hooks/useFetchKai'

import Nav from './Nav'
import Home from './Home'
import AllKai from './AllKai'



const App = () => {

  const [currentPage, setCurrentPage] = useState('Home')
  const { kai } = useFetchKai()

  return (
    <>
      <div className="title">
        <h1>Pātaka kai</h1>
      </div>

      <div className="main">
        <Nav page={currentPage} alter={setCurrentPage} />
        <Home  />
        <AllKai props={kai}/>
      </div>
    </>
  )
}

export default App
