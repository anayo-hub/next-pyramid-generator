"use client";
import { useState } from "react";

function Pyramid() {
  const [height, setHeight] = useState("");
  const [pyramid, setPyramid] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const heightNum = parseInt(height);
    if (isNaN(heightNum) || heightNum < 1 || heightNum > 8) {
      alert("Please enter a valid number between 1 and 8.");
      return;
    }
    generatePyramid(heightNum);
  };

  const generatePyramid = (height) => {
    let result = [];
    for (let i = 0; i < height; i++) {
      let line = "";

      for (let j = 0; j < height - i - 1; j++) {
        line += " ";
      }

      for (let j = 0; j < i + 1; j++) { 
        line += "#";
      }

      result.push(line);
    }
    setPyramid(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter the height of the pyramid (1-8):
          <input
            type="number"
            // value={height}
            onChange={(e) => setHeight(e.target.value)}
            min="1"
            max="8"
          />
        </label>
        <button type="submit">Generate Pyramid</button>
      </form>
      <pre>
        {pyramid.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </pre>
    </div>
  );
}

export default Pyramid;
