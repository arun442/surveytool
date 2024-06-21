import React, { useState, useEffect } from 'react';

function CountdownTimer({ endDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [endDate]);

  return (
    <div className='row' style={{width:'fit-content',margin:0,gap:'5px'}}>
      <div className='col' style={{backgroundColor:'#D5D5D5',fontFamily:'Poppins Medium',color:'black',borderRadius:'6px'}}>{timeLeft.days+'d'}</div>:
      <div className='col' style={{backgroundColor:'#D5D5D5',fontFamily:'Poppins Medium',color:'black',borderRadius:'6px'}}>{timeLeft.hours+'h'}</div>:
      <div className='col' style={{backgroundColor:'#D5D5D5',fontFamily:'Poppins Medium',color:'black',borderRadius:'6px'}}>{timeLeft.minutes+'m'}</div>:
      <div  className='col' style={{backgroundColor:'#D5D5D5',fontFamily:'Poppins Medium',color:'black',borderRadius:'6px'}}>{timeLeft.seconds+'S'}</div>

    </div>
  );
}

function calculateTimeLeft(endDate) {
  const now = new Date();
  console.log(now);
  const difference = new Date(endDate) - now;
  console.log(new Date(endDate));
  if (difference <= 0) {
    return {
      days: '00',
      hours: '00', // Add leading zero
      minutes: '00', // Add leading zero
      seconds: '00', // Add leading zero

    };
  }


  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (60 * 1000)) / 1000);


  return {
    days,
    hours,
    minutes,
    seconds
  };
}

export default CountdownTimer;
