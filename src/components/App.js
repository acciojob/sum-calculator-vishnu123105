
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
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter an integer"
      />
      <button onClick={handleAddNumber}>Add Number</button>

      <div>
        {numbers.length > 0 && <p>Numbers: {numbers.join(", ")}</p>}
        <p>Sum: {sum}</p>
      </div>
    </div>
  );
};

export default App;
