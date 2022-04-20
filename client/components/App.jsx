import React, {useState} from 'react'

import Nav from './Nav'
import Home from './Home'


const App = () => {

  const [currentPage, setCurrentPage] = useState('Home')

  return (
    <>
      <div className="title">
        <h1>Pātaka kai</h1>
      </div>

      <div className="main">
        <Nav page={currentPage} alter={setCurrentPage}/>
        <Home />
        <img src="images/construction.jpg"></img>
      </div>
    </>
  )
}

export default App
