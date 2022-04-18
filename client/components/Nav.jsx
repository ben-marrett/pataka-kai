import React from 'react'

function Nav() {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <li><button name="home">Home</button></li>
        <br></br>
        <li><button name="currentlyAvailable">Kai Available</button></li>
        <br></br>
        <li><button name="allKai">See All</button></li>
        <br></br>
        <li><button name="addKai">Add Kai</button></li>
        <br></br>
        <li><button name="requestKai">Request</button></li>
        <br></br>
        <li><button name="users">Meet Growers</button></li>
        
      </ul>
    </div>
  )
}

export default Nav