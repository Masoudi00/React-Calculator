
import React, { useState } from 'react';

function Calculator() {
  const [display, setDisplay] = useState('0'); // State to manage the display
  const [firstOperand, setFirstOperand] = useState(null); // State for the first operand
  const [operator, setOperator] = useState(null); // State to store the operator
  const [clearDisplay, setClearDisplay] = useState(false); // State to clear the display on the next input

  // Function to handle number button clicks
  const handleNumberClick = (number) => {
    if (clearDisplay) {
      setDisplay(number.toString());
      setClearDisplay(false);
    } else {
      setDisplay(display === '0' ? number.toString() : display + number);
    }
  };

  // Function to handle operator button clicks
  const handleOperatorClick = (nextOperator) => {
    if (firstOperand === null) {
      setFirstOperand(parseFloat(display));
      setOperator(nextOperator);
      setClearDisplay(true);
    } else {
      // Calculate the result and update the display
      const secondOperand = parseFloat(display);
      switch (operator) {
        case '+':
          setDisplay((firstOperand + secondOperand).toString());
          break;
        case '-':
          setDisplay((firstOperand - secondOperand).toString());
          break;
        case '*':
          setDisplay((firstOperand * secondOperand).toString());
          break;
        case '/':
          setDisplay((firstOperand / secondOperand).toString());
          break;
        default:
          break;
      }
      setFirstOperand(parseFloat(display));
      setOperator(nextOperator);
      setClearDisplay(true);
    }
  };

  // Function to handle equals button click
  const handleEqualsClick = () => {
    if (firstOperand !== null) {
      const secondOperand = parseFloat(display);
      switch (operator) {
        case '+':
          setDisplay((firstOperand + secondOperand).toString());
          break;
        case '-':
          setDisplay((firstOperand - secondOperand).toString());
          break;
        case '*':
          setDisplay((firstOperand * secondOperand).toString());
          break;
        case '/':
          setDisplay((firstOperand / secondOperand).toString());
          break;
        default:
          break;
      }
      setFirstOperand(null);
      setOperator(null);
      setClearDisplay(true);
    }
  };

  // Function to clear the display
  const handleClear = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setClearDisplay(false);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleOperatorClick('/')}>/</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick(7)}>7</button>
          <button onClick={() => handleNumberClick(8)}>8</button>
          <button onClick={() => handleNumberClick(9)}>9</button>
          <button onClick={() => handleOperatorClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick(4)}>4</button>
          <button onClick={() => handleNumberClick(5)}>5</button>
          <button onClick={() => handleNumberClick(6)}>6</button>
          <button onClick={handleEqualsClick}>=</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick(1)}>1</button>
          <button onClick={() => handleNumberClick(2)}>2</button>
          <button onClick={() => handleNumberClick(3)}>3</button>
          <button onClick={() => handleNumberClick(0)}>0</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
