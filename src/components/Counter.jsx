import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const handleClick = () =>{
        setCount((pre) => pre+1)
        console.log(count)
    }
  return (
    <>
        <h1>Counter: {count}</h1>
        <button onClick={() => handleClick()}>Increament</button>
    </>
  )
}

export default Counter