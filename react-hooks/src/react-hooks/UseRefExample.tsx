import React, { useRef } from 'react';

function UseRefExample() {
  const myRef = useRef<HTMLParagraphElement | null>(null);
  const countRef = useRef<number>(0);

  const incrementCount = () => {
    countRef.current++;
    if (myRef.current) {
      myRef.current.textContent = `Count: ${countRef.current}`;
    }
  };

  return (
    <div>
      <p ref={myRef}>Count: 0</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default UseRefExample;

/*
In the code you provided, you are using the `useRef` hook to create two separate refs: `myRef` and `countRef`.

1. `myRef` is used to reference a DOM element:
   - `const myRef = useRef<HTMLParagraphElement | null>(null);` creates a ref named `myRef` that can refer to an HTML `<p>` element or be null initially.
   - `<p ref={myRef}>Count: 0</p>` associates the `myRef` with the `<p>` element, allowing you to access and manipulate the DOM element.

2. `countRef` is used to store a mutable value:
   - `const countRef = useRef<number>(0);` creates a ref named `countRef` with an initial value of `0`. This ref is used to store a mutable number.

The `incrementCount` function is called when the "Increment Count" button is clicked. It increments the `countRef.current` value, and if `myRef.current` is not null, it updates the text content of the `<p>` element with the current count, so you see the updated count immediately.

This usage of `useRef` allows you to interact with a DOM element (in this case, the `<p>` element) and store mutable data (the count) outside of the component's state, which is particularly useful when you want to manage values that don't trigger re-renders but still need to be reflected in the DOM.
*/