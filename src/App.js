import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), now.getMonth(), 23);
    if (targetDate < now) targetDate.setMonth(targetDate.getMonth() + 1);
    
    const timeDifference = targetDate - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = String(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((timeDifference % (1000 * 60)) / 1000)).padStart(2, '0');

    setTimeLeft({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const today = new Date();
  if (today.getDate() === 23) {
    return (
      <div className="App">
        <div className="Countdown">
          <div className="CongratsText Number">Sretna Vam obljetnica Stevinog prestanka kockanja :)</div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="Countdown">
        <div className="Segment">
          <span className="NumberSegment">
            <span className="Number TickingTimebombBB">{timeLeft.days}</span>
          </span>
          <span className={`Colon ${parseInt(timeLeft.seconds) % 2 === 1 ? 'Visible' : 'Hidden'}`}>:</span>
        </div>
        <div className="Segment">
          <span className="NumberSegment">
            <span className="Number TickingTimebombBB">{timeLeft.hours}</span>
          </span>
          <span className={`Colon ${parseInt(timeLeft.seconds) % 2 === 1 ? 'Visible' : 'Hidden'}`}>:</span>
        </div>
        <div className="Segment">
          <span className="NumberSegment">
            <span className="Number TickingTimebombBB">{timeLeft.minutes}</span>
          </span>
          <span className={`Colon ${parseInt(timeLeft.seconds) % 2 === 1 ? 'Visible' : 'Hidden'}`}>:</span>
        </div>
        <div className="Segment">
          <span className="NumberSegment">
            <span className="Number TickingTimebombBB">{timeLeft.seconds}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;