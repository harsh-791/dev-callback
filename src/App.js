import logo from './logo.svg';
import './App.css';
import React, { useState, useCallback } from 'react';


function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => setCount(count+1),[count]);
  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={incrementCount}>Increment Counter</button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr/>
      <ChildComponent count={count} onClick={incrementCount}/>
    </div>
  );
}

const ChildComponent = React.memo(function({ count, onClick}){
  console.log("Child component re-rendered");
  return(
    <div>
      <h2>This is a child component</h2>
      <button onClick={onClick}>Increment</button>
      <h4>Count: {count}</h4>
    </div>
  );
})

export default App;
