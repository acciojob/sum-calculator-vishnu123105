import React, { useState, useEffect } from "react";
import "./App.css"; 

const App = () => {
   const [numberInput, setNumberInput] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleAddNumber = () => {
    const parsed = parseInt(numberInput, 10);
    if (!isNaN(parsed)) {
      setNumbers(prev => [...prev, parsed]);
    }
    setNumberInput('');
  };

  useEffect(() => {
    let isCancelled = false;

    const calculateSumAsync = async () => {
      const total = await new Promise(resolve => {
        setTimeout(() => {
          const result = numbers.reduce((acc, val) => acc + val, 0);
          resolve(result);
        }, 0);
      });

      if (!isCancelled) {
        setSum(total);
      }
    };


    calculateSumAsync()

    return () => {
      isCancelled = true;
    };
  }, [numbers]);

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Sum Calculator</h2>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="number"
          value={numberInput}
          onChange={(e) => setNumberInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAddNumber();
          }}
          className="border border-gray-300 rounded px-2 py-1 w-full"
          placeholder="Enter a number"
        />
        <button
          onClick={handleAddNumber}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <div className="text-lg">Current Sum: <strong>{sum}</strong></div>
      <div className="mt-2 text-sm text-gray-500">
        Numbers: {numbers.join(', ')}
      </div>
    </div>
  );
};


export default App;