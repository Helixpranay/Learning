import React, { useContext } from 'react'
import { MyContext } from './MyContextProvider'

function UseContextExample() {
  const contextValue = useContext(MyContext);
  console.log('contextValue',contextValue);
  
  return (
    <div>
      <p>Context value: {contextValue}</p>
    </div>
  )
}

export default UseContextExample
