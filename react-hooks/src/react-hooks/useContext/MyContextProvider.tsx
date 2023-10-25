import React, { createContext } from 'react'
import UseContextExample from './UseContextExample';
export const MyContext = createContext('Hello Pranay !!' );

function MyContextProvider() {
  return (
    <MyContext.Provider value=''>
        <UseContextExample/>
    </MyContext.Provider>
  )
}

export default MyContextProvider

/*
The useContext hook is a great hook to use when you need to send props down through multiple, nested child components.

Instead of passing it through every single component on the way down, you can define it in the parent component. Then, bring it into the nested component where you need it, while bypassing the middle components you’d normally have to send it through.
*/