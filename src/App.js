import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [array, setArray] = useState([]);
  const [sorted, setsorted] = useState(false);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    let n = prompt("enter no of elements in array");
    while (n > 100) {
      n = prompt("limit exceeded enter below 100");
    }
    const newArray = [];
    for (let i = 0; i < n; i++) {
      newArray.push(randomint(5, 500));
    }
    setArray(newArray);
  };

  const bubbleSort = async () => {
    setsorted(true);
    const n = array.length;
    let newarray = [...array];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        const bars = document.getElementsByClassName("array-bar");
        bars[j].style.backgroundColor = "#007bff";
        bars[j + 1].style.backgroundColor = "#007bff";
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 100)
        );
        if (newarray[j] > newarray[j + 1]) {
          bars[j].style.backgroundColor = "red";
          bars[j + 1].style.backgroundColor = "red";
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 100)
          );
          const temp = newarray[j];
          newarray[j] = newarray[j + 1];
          newarray[j + 1] = temp;
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, 100)
          );

          setArray([...newarray]);
        }
        bars[j].style.backgroundColor = "pink";
        bars[j + 1].style.backgroundColor = "pink";
      }
    }
  };

  const randomint = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="App">
      <h1>Algorithm Visualizer</h1>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            className="array-bar"
            key={index}
            style={{ height: `${value / 5}px` }}
          ></div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={resetArray}>Generate New Array</button>
        <button
          className={`btn ${sorted ? "disabled" : "active"}`}
          onClick={bubbleSort}
        >
          Bubble Sort
        </button>
      </div>
    </div>
  );
}

export default App;
