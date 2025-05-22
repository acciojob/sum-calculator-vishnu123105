
import "./../styles/App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  
  const handleAddNumber = () => {
    const parsed = parseInt(input, 10);
    if (!isNaN(parsed)) {
      setNumbers((prevNumbers) => [...prevNumbers, parsed]);
    }
    setInput("");
  };

   useEffect(() => {
    let isCancelled = false;

    const asyncSum = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      const total = numbers.reduce((acc, num) => acc + num, 0);
      if (!isCancelled) {
        setSum(total);
      }
    };

    asyncSum();
    return () => {
      isCancelled = true;
    };
  }, [numbers]);

  return (
    <div className="main" style={{ fontFamily: "Arial", padding: "1rem" }}>
      <h1>Async Sum Calculator</h1>
      <input
        id="number-input"
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
      />
      <button id="add-btn" onClick={handleAddNumber} style={{ marginLeft: "0.5rem" }}>
        Add Number
      </button>

      <div style={{ marginTop: "1rem" }}>
        <p id="sum">Sum: {sum}</p>
        {numbers.length > 0 && (
          <p id="numbers">Numbers: {numbers.join(", ")}</p>
        )}
      </div>
    </div>
  );
};

export default App;
