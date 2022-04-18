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
      {/* <button onClick={handleClick} name="Home">Home</button>
      <button onClick={handleClick} name="allKai">List of Kai available</button>
      <button onClick={handleClick} name="addKai">Add your kai</button>
      <button onClick={handleClick} name="requestKai">Make a request</button>  */}
      

      <div className="title">
        <img src="/images/color_earth.gif" />
        <h1>Pātaka kai</h1>
      </div>

      <div className="main">
        <Nav />
        <Home />
      </div>
    </>
  )
}

export default App
