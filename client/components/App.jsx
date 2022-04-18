import React, {useState} from 'react'

import Nav from './Nav'
import Home from './Home'


const App = () => {

  const [page, setPage] = useState('Home')


  function handleClick(evt) {
    setPage(evt.target.name)
  }

  return (
    <>
      <div className="title">
        <h1>Pātaka kai</h1>
      </div>

      <div className="main">
        <Nav />
        <Home />
        <img src="images/construction.jpg"></img>
      </div>
    </>
  )
}

export default App
