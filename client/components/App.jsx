import React, { useState, useEffect } from 'react'

import Home from './Home'
// import { getGreeting } from '../apiClient'

const App = () => {
  // const [greeting, setGreeting] = useState('')
  // const [count, setCount] = useState(0)
  // const [isError, setIsError] = useState(false)

  // useEffect(() => {
  //   getGreeting()
  //     .then((greeting) => {
  //       console.log(greeting)
  //       setGreeting(greeting)
  //       setIsError(false)
  //       return null
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setIsError(true)
  //     })
  // }, [count])

  return (
    <>
     <Home />
    </>
  )
}

export default App
