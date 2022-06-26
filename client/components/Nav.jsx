import React from 'react'
import { Link } from 'react-router-dom'

function Nav(current, setPage) {

   function handleClick(evt) {
    setPage(evt.target.name)
   }
  
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <li key="home"><Link to='/'>Home</Link></li><br></br>
        <li key="allKai"><Link to='/allKai'>All Kai</Link></li>
      </ul>
    </div>
  )
}

export default Nav