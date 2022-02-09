import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const LiveClock = () => {
  const [value, setValue] = useState(new Date());
 
  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);

  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
  };
 
  return (
    <div style={divStyle}>
      <Clock value={value}/>
    </div>
  )
}

export default LiveClock;