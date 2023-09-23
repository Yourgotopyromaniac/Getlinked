import React, { useState, useEffect } from 'react';
import '@fontsource/unica-one';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set your target date and time
    const targetDate = new Date('2023-11-17T23:59:59');

    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        clearInterval(intervalId);
        // You can take some action when the countdown reaches zero
        // For example, display a message or trigger an event.
      } else {
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        setTimeLeft({
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0'),
        });
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='flex gap-4 items-center text-[48px] lg:text-6xl font-unica'>
      <div>{timeLeft.hours}<span className='text-sm'>H</span></div>
      <div>{timeLeft.minutes}<span className='text-sm'>M</span></div>
      <div>{timeLeft.seconds}<span className='text-sm'>S</span></div>
    </div>
  );
};

export default Countdown;
