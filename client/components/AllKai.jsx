import React from "react";

function AllKai(kai) {

  return (
  <div>
      {console.log(kai.props)}
      <h2>All Kai Available:</h2>
      {kai.props.map((item) => {
        return <li key={item.id}>
          
          <span>{item.kaiName}:</span>
          <p>grown by: {item.grownBy}<br></br>
          <span>at {item.location}</span><br></br>
            {item.amount} available <br></br>
            expires: {item.expiry}
          </p>
        </li>
      
      })}
    </div>
  )
}

export default AllKai