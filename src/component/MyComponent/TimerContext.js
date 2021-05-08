import React, { useContext, useState, useEffect } from 'react'

const TimerContext = React.createContext();
const TimerContextUpdate = React.createContext();

export function useTimerConsumer() {
  return useContext(TimerContext)
}

export function useTimerConsumerUpdate() {
  return useContext(TimerContextUpdate)
}

export function TimerProvider({ children }) {
  //console.log("TimerContext rendring")
  const [result, setResult] = useState(() => 'win');
  const [loser, setLoser] = useState({ name: 'You', out: false });
  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(false);

  var myVar;
  useEffect(() => {
    if(isActive)
    {
      if (seconds > 0) {
            myVar = setTimeout(() => setSeconds(seconds - 1), 1000);
          } else {
            setLoser(pre => ({ ...loser, out: true }))
          }
    }
    return () => clearTimeout(myVar); 
  }, [isActive,seconds]);

  function resetTime() {
    clearTimeout(myVar)
    setSeconds(30)
  }

  function clearTime() {
    clearTimeout(myVar);
  }

  return (
    <TimerContext.Provider value={{ seconds, result, loser ,isActive}}>
      <TimerContextUpdate.Provider value={{ clearTime, setResult, setLoser, setSeconds, resetTime,setIsActive }}>
        {children}
      </TimerContextUpdate.Provider>
    </TimerContext.Provider>
  )
}