import { useState } from 'react';

import './App.css';

function App() {
  let [count, setCount] = useState(6);

  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    } else {
    }
  };
  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(count);
    }
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Count is: {count} </h2>
      <button onClick={addValue}> Add Value</button>
      <button onClick={removeValue}> Remove Value</button>
      <span> Current value is {count}</span>
    </>
  );
}

export default App;
