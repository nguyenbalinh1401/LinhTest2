import React, { useState } from 'react'

export default function Home() {
  const [count,setCount] = useState(0);
  return (
    <div>
      <div>Your count is {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count*2)}>X2</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  )
}

