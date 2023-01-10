import React, { useState, useEffect } from 'react';

function Countdown(props) {
  const { duration, callback } = props;
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (!isRunning && timeLeft !== 0) {
      clearInterval(interval);
    }
    if (timeLeft === 0) {
      clearInterval(interval);
      callback();
      new Audio('bell.mp3').play();
    }
    return () => clearInterval(interval);
  }, [timeLeft, isRunning, callback]);

  const resetTimer = () => {
    setTimeLeft(duration);
    setIsRunning(false);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div>
        <div>
      {Math.floor(timeLeft / 60)}:{timeLeft % 60< 10 ? '0' : ''}
      {timeLeft % 60}
      </div>
      <button onClick={startTimer}>Start</button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={toggleTimer}>
        {isRunning ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
}

export default Countdown;
