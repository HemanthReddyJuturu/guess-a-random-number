import React, { useState, useRef } from 'react';
import './style.css';


const mstyle = {
  fontSize: "2rem",
};

function generateId() {
  return Math.floor(Math.random() * 30) + 1;
}

function Guess() {
  const [attempts, setAttempts] = useState(0);
  const [input, setInput] = useState("");
  const [id, setId] = useState(generateId());
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  const inputRef = useRef(null); // Using useRef to manage the input field

  const handleGuess = () => {
    if (input.length === 0) {
      alert("Please Enter a number");
    } else {
      if (Number(input) === id) {
        setMessage("Hurray! You Guessed the Number");
        setAttempts((prev) => prev + 1);
        setScore((prev) => prev + 10);
        setInput(""); // Clear input on correct guess
        inputRef.current.value = ""; // Reset input field using ref
      } else if (input > id) {
        setMessage("Expecting a lower Number");
        setAttempts((prev) => prev + 1);
        setInput(""); // Clear input on incorrect guess
        inputRef.current.value = ""; // Reset input field using ref
      } else {
        setMessage("Expecting a bigger Number");
        setAttempts((prev) => prev + 1);
        setInput(""); // Clear input on incorrect guess
        inputRef.current.value = ""; // Reset input field using ref
      }
    }
  };

  const playAgain = () => {
    setAttempts(0);
    setId(generateId());
    setInput("");
    setMessage(""); // Reset message
  };

  const reset = () => {
    setScore(0);
    setAttempts(0);
    setInput("");
    setMessage(""); // Reset message
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Guess the Number Game</h1>
      </div>

      

      <div className="input-section">
        <p style={mstyle}>Enter a number from 1 to 30</p>
        <input
          type="number"
          min={1}
          max={30}
          ref={inputRef} // Use ref for input field
          className='uiDesign'
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter a number'
        />
      </div>

      <div className="message">
        <h3>{message}</h3>
      </div>

      <div className="buttons">
        <button onClick={handleGuess}>Submit</button>
        <button onClick={playAgain}>Play Again</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="score-attempts">
        <div>
          <p className="designLeftText">Score:</p>
          <h3>{score}</h3>
        </div>
        <div>
          <p className="designText">Attempts:</p>
          <h3>{attempts}</h3>
        </div>
      </div>
    </div>
  );
}

export default Guess;
