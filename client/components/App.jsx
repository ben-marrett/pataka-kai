import React, {useState} from 'react'

import Home from './Home'


const App = () => {

  const [page, setPage] = useState('Home')


  function handleClick(evt) {
    setPage(evt.target.name)
  }

  return (
    <>
      <button onClick={handleClick} name="Home">Home</button>
      <button onClick={handleClick} name="allKai">List of Kai available</button>
      <button onClick={handleClick} name="addKai">Add your kai</button>
      <button onClick={handleClick} name="requestKai">Make a request</button> 
      
     <Home />
    </>
  )
}

export default App
