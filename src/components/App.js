import React, { useState, useEffect } from "react";
import "./App.css"; 

const App = () => {
  const [input, setInput] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let isCancelled = false;
    async function calculateSumAsync() {
      await new Promise((r) => setTimeout(r, 10));
      if (!isCancelled) {
        setSum(numbers.reduce((acc, num) => acc + num, 0));
      }
    }
    calculateSumAsync();
    return () => { isCancelled = true; };
  }, [numbers]);

  const handleAddNumber = () => {
    const parsed = parseInt(input, 10);
    if (!isNaN(parsed)) {
      setNumbers([...numbers, parsed]);
    }
    setInput("");
  };

  

  return (
    <div>
      <h1>Number Sum Calculator</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter an integer"
      />
      <button onClick={handleAddNumber}>Add Number</button>
      <p>Numbers: {numbers.join(", ")}</p>
      <p>Sum: {sum}</p>
    </div>
  );
};


export default App;