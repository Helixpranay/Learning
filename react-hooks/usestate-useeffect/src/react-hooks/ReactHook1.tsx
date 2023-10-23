import React, { useState } from 'react'

function ReactHook1() {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count+1);
    }
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default ReactHook1
