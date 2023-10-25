import React from 'react';
import './App.css';
// import ReactHook1 from './react-hooks/ReactHook1';
import ReactHook2 from './react-hooks/UseEffectExample';
import UseRefExample from './react-hooks/UseRefExample';
import UseMemoExample from './react-hooks/UseMemoExample';

function App() {
  return (
    <div className="App">
      {/* <UseRefExample/> */}
      <UseMemoExample/>
    </div>
  );
}

export default App;
