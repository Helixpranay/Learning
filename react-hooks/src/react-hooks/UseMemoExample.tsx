import React, { useMemo, useState } from 'react'

function UseMemoExample() {
    const [number, setNumber] = useState(5);
    const [multiplier, setMultiplier] = useState(2);

    const result = useMemo(() => {
        console.log('Calculating result...');
        return number*multiplier;
    },[number,multiplier])

  return (
    <div>
      <p>Number: {number}</p>
      <p>Multiplier: {multiplier}</p>
      <p>Result: {result}</p>
      <button onClick={() => setNumber(number+1)}>Increment number</button>
      <button onClick={() => setMultiplier(multiplier+1)}>Increment multiplier</button>
    </div>
  )
}

export default UseMemoExample
