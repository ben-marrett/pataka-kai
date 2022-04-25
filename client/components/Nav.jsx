import React from 'react'
import { Link } from 'react-router-dom'

function Nav(current, setPage) {

  //  function handleClick(evt) {
  //   setPage(evt.target.name)
  //  }
  
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <li key="home"><Link to='/'>Home</Link></li>
        <li key="allKai"><Link to='/allKai'>All Kai</Link></li>
        <br></br>
        {/* <li><button onClick={handleClick} name="CurrentlyAvailable">Kai Available</button></li>
        <br></br>
        <li><button onClick={handleClick} name="AllKai">See All</button></li>
        <br></br>
        <li><button onClick={handleClick} name="KaiEntry">Add Kai</button></li>
        <br></br>
        <li><button onClick={handleClick} name="RequestKai">Request</button></li>
        <br></br>
        <li><button onClick={handleClick} name="MemberProfiles">Meet Growers</button></li> */}
        
      </ul>
    </div>
  )
}

export default Nav