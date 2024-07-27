import React, { useState, useMemo } from 'react';

const Add = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // Memoize the expensive computation
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, 'New Todo']);
  };

  return (
    <div>
        <center>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
      <div>
        {calculation}
      </div>
      <div>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      </center>
    </div>
  );
};

// Expensive function
function expensiveCalculation(num) {
  console.log('Calculating...');
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
}

export default Add;
