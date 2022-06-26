import React, { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import useFetchKai from './hooks/useFetchKai'

import Nav from './Nav'
import Home from './Home'
import AllKai from './AllKai'
import LogInNav from './LogInNav'


const App = () => {

  const [currentPage, setCurrentPage] = useState('Home')
  const { kai } = useFetchKai()

  return (
    <>
      <div className="title">
        <h1>Pātaka kai</h1>
      </div>

      <div className="main">
        <Router>
          <Nav page={currentPage} alter={setCurrentPage} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allKai" element={<AllKai props={kai} />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
