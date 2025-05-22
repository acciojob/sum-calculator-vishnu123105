
import "./../styles/App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    setSum(total);
  }, [numbers]);

  const handleAddNumber = () => {
    const parsed = parseInt(input, 10);
    if (!isNaN(parsed)) {
      setNumbers((prevNumbers) => [...prevNumbers, parsed]);
    }
    setInput("");
  };

  return (
    <div className="main">
      <h1>Number Sum Calculator</h1>
      <input
      id="number-input"
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter an integer"
      />
      <button id="add-btn" onClick={handleAddNumber}>Add Number</button>

      <div>
        <p id="sum">Sum: {sum}</p>
        {numbers.length > 0 && (
          <p id="numbers">Numbers: {numbers.join(", ")}</p>
        )}
      </div>
    </div>
  );
};

export default App;
