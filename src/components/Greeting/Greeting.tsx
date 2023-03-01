import React, { useState } from 'react'

const Greeting = () => {
  const [changed, setChanged] = useState(false)
  const changeText = () => {
    setChanged((prev) => !prev)
  }

  return (
    <div>
      {changed ? <p>changed!</p> : <p>hello world!</p>}
      <button onClick={changeText}>change</button>
    </div>
  )
}

export default Greeting
