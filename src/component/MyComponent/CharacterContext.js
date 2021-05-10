import React, { useContext, useState, useEffect } from 'react'
import { useTimerConsumer, useTimerConsumerUpdate } from './TimerContext'

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
  const { setLoser, resetTime, setIsActive } = useTimerConsumerUpdate();

  var alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [round, setRound] = useState(() => 1)
  const { loser, isActive } = useTimerConsumer();
  const [once, setOnce] = useState(() => { return false })
  /* const [roundList, setRoundList] = useState({ r1_winner: null })*/
   const [roundList1, setRoundList1] = useState({ r1_loser: null }) 
   const [roundList2, setRoundList2] = useState({ r2_loser: null }) 
   const [roundList3, setRoundList3] = useState({ r3_loser: null }) 
   const [roundList4, setRoundList4] = useState({ r4_loser: null }) 
   const [roundList5, setRoundList5] = useState({ r5_loser: null }) 
   /* const [roundList, setRoundList] = useState([{ r1_loser: null }, { r2_loser: null }, { r3_loser: null }, { r4_loser: null }, { r5_loser: null }]) */ 

  useEffect(() => {
    let c = getRandomChar();
    console.log("inside useEffect getrandomchar c=", c)
    setInputText(c)
  }, [isActive])

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
    console.log("myturn inputtext=", currentChar)
    setLoser({ name: 'You', out: false })
    setInputText(pre => pre + currentChar);
    resetTime()
    setOnce(true)
  }



  return (
    <CharacterContext.Provider value={{ inputText, 
                                            round,
                                             once, 
                                             roundList1,
                                             roundList2,                                             roundList3,
                                             roundList4,
                                             roundList5 }}>
      <CharacterContextUpdate.Provider value={{ setInputText,
                                                   setRound, 
                                                   setOnce, 
                                                   myTurn, 
                                                   setRoundList1,
                                                   setRoundList2,
                                                   setRoundList3,
                                                   setRoundList4,
                                                   setRoundList5 }}>
        {children}
      </CharacterContextUpdate.Provider>
    </CharacterContext.Provider >
  )

}