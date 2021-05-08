import React, { useContext, useState, useEffect } from 'react'
import { useTimerConsumer,useTimerConsumerUpdate } from './TimerContext'

const CharacterContext = React.createContext();
const CharacterContextUpdate = React.createContext();

export function useCharacterConsumer() {
  return useContext(CharacterContext)
}

export function useCharacterConsumerUpdate() {
  return useContext(CharacterContextUpdate)
}

/////////////////////////////////////////////////////////////////////////////////////

export function CharacterProvider({ children }) {
  const {setLoser,resetTime,setIsActive}=useTimerConsumerUpdate();

  var alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [round,setRound]=useState(()=>1)
  const {loser,isActive} = useTimerConsumer();
  const [once, setOnce] = useState(() => { return false })

   useEffect(()=>{
    let c=getRandomChar();
    console.log("inside useEffect getrandomchar c=",c)
    setInputText(c)
  },[isActive]) 

  const getRandomChar = () => {
    let char = '';
    let flag = true
    if (true) {
      const charLength = alphabets.length;
      char = alphabets.charAt(Math.floor(Math.random() *
        charLength));

      while (flag) {
        if (char === 'X' || char === 'Y' || char === 'Z') {
          char = getRandomChar();
        } else {
          flag = false;
        }
      }
    }

    return char
  }

  const [inputText, setInputText] = useState(() => {
    console.log("initialstate")
    return getRandomChar()
  });

   const myTurn = (e) => {
    let currentChar = e.target.outerText;
    currentChar = currentChar.charAt(currentChar.length - 1)
    console.log("myturn inputtext=",currentChar)
    setInputText(pre => pre + currentChar);
    console.log("now inputText=",inputText)
    resetTime()
    setOnce(true)
  } 



  return (
    <CharacterContext.Provider value={{ inputText,round,once}}>
      <CharacterContextUpdate.Provider value={{ setInputText,setRound,setOnce,myTurn}}>
        {children}
      </CharacterContextUpdate.Provider>
    </CharacterContext.Provider >
  )

}