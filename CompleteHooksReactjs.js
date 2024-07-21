React Hooks are functions that let you use state and other React features in functional components. Here is a comprehensive overview of the most commonly used hooks, each with a separate example for clarity:

1. useState
The useState hook lets you add state to functional components.

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;

2. useEffect
The useEffect hook lets you perform side effects in functional components. It can be used for data fetching, subscriptions, or manually changing the DOM.

Example
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default DataFetcher;



React Hooks are functions that let you use state and other React features in functional components. Here is a comprehensive overview of the most commonly used hooks, each with a separate example for clarity:

1. useState
The useState hook lets you add state to functional components.

Example
jsx
Copy code
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
2. useEffect
The useEffect hook lets you perform side effects in functional components. It can be used for data fetching, subscriptions, or manually changing the DOM.

Example
jsx
Copy code
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default DataFetcher;
3. useContext
The useContext hook lets you subscribe to React context without introducing nesting.

Example
import React, { useContext, createContext } from 'react';

const ThemeContext = createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <div style={{ background: theme === 'dark' ? '#333' : '#FFF' }}>Theme is {theme}</div>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

export default App;



4. useReducer
The useReducer hook is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

Example

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default Counter;



5. useCallback
The useCallback hook returns a memoized callback. It’s useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

Example

import React, { useState, useCallback } from 'react';

function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
}

const MemoizedChild = React.memo(Child);

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <MemoizedChild onClick={handleClick} />
    </div>
  );
}

export default Parent;

6. useMemo
The useMemo hook returns a memoized value. It’s useful when you need to optimize performance by memoizing expensive calculations.

Example
import React, { useState, useMemo } from 'react';

function ExpensiveComponent({ num }) {
  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return num * 2;
  }, [num]);

  return <div>Result: {expensiveCalculation}</div>;
}

function Parent() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div>
      <ExpensiveComponent num={number} />
      <button onClick={() => setNumber(number + 1)}>Increment number</button>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
}

export default Parent;

7. useRef
The useRef hook returns a mutable ref object whose .current property is initialized to the passed argument. It’s useful for accessing the DOM directly or keeping a mutable object around.

Example
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}

export default FocusInput;

8. useImperativeHandle
The useImperativeHandle hook customizes the instance value that is exposed when using ref in parent components. It’s usually used with forwardRef.

Example
import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} type="text" />;
});

function Parent() {
  const customInputRef = useRef();

  return (
    <div>
      <CustomInput ref={customInputRef} />
      <button onClick={() => customInputRef.current.focus()}>Focus the input</button>
    </div>
  );
}

export default Parent;
9. useLayoutEffect
The useLayoutEffect hook is similar to useEffect, but it fires synchronously after all DOM mutations. It can be used for reading layout from the DOM and synchronously re-rendering.

Example

import React, { useLayoutEffect, useRef } from 'react';

function LayoutEffectComponent() {
  const divRef = useRef();

  useLayoutEffect(() => {
    console.log('Div offsetHeight:', divRef.current.offsetHeight);
  }, []);

  return <div ref={divRef}>This is a div.</div>;
}

export default LayoutEffectComponent;

10. useDebugValue
The useDebugValue hook can be used to display a label for custom hooks in React DevTools.

Example

import React, { useState, useDebugValue } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useDebugValue(isOnline ? 'Online' : 'Offline');

  // Imagine this subscribes to a friend status API...
  return isOnline;
}

function FriendComponent({ friendID }) {
  const isOnline = useFriendStatus(friendID);

  return <div>{isOnline ? 'Online' : 'Offline'}</div>;
}

export default FriendComponent;

These are the primary hooks provided by React. They offer a powerful way to manage state, side effects, refs, and more within functional components, making your code more readable and easier to manage.