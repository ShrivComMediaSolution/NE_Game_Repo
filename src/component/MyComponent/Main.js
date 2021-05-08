import React, { useState, useEffect, Fragment } from 'react'
import Vscomputer from '../Vscomputer'
import axios from 'axios'
import { useTimerConsumer, useTimerConsumerUpdate } from './TimerContext'
import {useCharacterConsumer,useCharacterConsumerUpdate} from './CharacterContext'


var val;
export const Main = React.memo(() => {
//console.log("Main rendring")

  const {clearTime,setResult,setLoser,resetTime,setIsActive} = useTimerConsumerUpdate();
  const {inputText,once}=useCharacterConsumer();
  const {setInputText,setOnce}=useCharacterConsumerUpdate()
  const { result ,loser} = useTimerConsumer();
  

  //const [character, setCharacter] = useState('');
  //const [once, setOnce] = useState(() => { return false })
  ////////////////////////////

  const [wordList, setWordList] = useState([])
  const [loading, setLoading] = useState(false)

//Fetching Data API
useEffect(async() => {
  if(inputText.length===2){ 
    console.log("before calling get word",inputText,",",inputText.length)

    {loser.out && setLoading(true)

      const searchWord={
        "word":`${inputText}`,
        "limit":"50"
      }
      const config={
        headers: {
          'APPKEY': 'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
        }
      }
      const res =await axios.post(`https://theneverendingwordgame.com/ne_game_api/api/get/dictionary/words`,searchWord,
        config)
        
      
      //console.log("NEW API WORD+=",res.data.data[0].word)
      if(res.data.status===400){
            console.log("Status:",res.data.status,"Error_message:",res.data.error_message)
          setResult('lose')
          setLoser(pre=>({...loser,out:true}));
          setIsActive(false)
          clearTimeout();
      }else if(res.data.status===200){
        console.log("WORD_LIST=",res.data.data)
          setWordList(res.data.data)
          //turnControler(res.data.data,res.data.data.length);
      }
      setLoading(false)
       
  }
    
}
  
}, [inputText])




useEffect(()=>{
  turnControler();
},[wordList])

/* useEffect(()=>{
  computerTurn()
},[once]) */


/* useEffect((inputText) => {
  console.log("before calling get word",inputText)
  if(inputText===2){
    console.log("calling get word")
      getWordList(inputText)
  }
}, [inputText])

  const getWordList=async(search)=>{
    console.log("INput text=",search,",",search.length)
    {loser.out && setLoading(true)

      const searchWord={
        "word":`${search}`,
        "limit":"50"
      }
      const config={
        headers: {
          'APPKEY': 'Py9YJXgBecbbqxjRVaHarcSnJyuzhxGqJTkY6xKZRfrdXFy72HPXvFRvfEjy'
        }
      }
      const res =await axios.post(`https://theneverendingwordgame.com/ne_game_api/api/get/dictionary/words`,searchWord,
        config)
        
      
      //console.log("NEW API WORD+=",res.data.data[0].word)
      if(res.data.status===400){
            console.log("Status:",res.data.status,"Error_message:",res.data.error_message)
          setResult('lose')
      }else if(res.data.status===200){
        console.log("WORD_LIST=",res.data.data)
          setWordList(res.data.data)
      }
      setLoading(false)
      turnControler(res.data.data,res.data.data.length);  
  }
}

 */

  
useEffect(() => {

  if(loser.out===true){
    callMyStopFun();
  }
},[loser])


const callMyStopFun=()=>{
  clearTime()
}
///////////////////////////////////////////

  const computerTurn=()=>{
   
    once && setTimeout(() => {
     
      setLoser({name:'Computer',out:false});
    
      let char=findChar()
      
      char=char.charAt(0).toUpperCase()
      console.log("next computer char=",char)
      setInputText(pre => pre + char);
      //setOnce(false)
     
    }, 2000)
    
  }
  
/////////////////////////////////////////////
  //Find character form random word
  const findChar=()=>{

        const randomword = Math.floor(Math.random() * wordList.length);
        console.log("INFO=",wordList,",",wordList.length,",",randomword)
        const guesschar=wordList[randomword].word.charAt((inputText.length))
        console.log("gusschar=",guesschar)
        setOnce(false)
        return guesschar
        
  } 

  const turnControler=()=>{
    
    if((loser.name==='You' || loser.name==='Computer') && wordList.length>0 && once){
      val=wordList.find((item)=>{
        //console.log("val=",item.word)
        return item.word.toUpperCase()===inputText.toUpperCase()
      })
    
      if(val){
        console.log("word found val=",val)
        setLoser(pre=>({...loser,out:true}));
        setIsActive(false)
        setOnce(false)
        clearTimeout()
        return 
      }
    }
    
      if(once && wordList.length>0){
      computerTurn()
    }
    /* if(len<=0){
      clearTimeout()
    } */
  }


  /* const myTurn = (e) => {
    let currentChar = e.target.outerText;
    currentChar = currentChar.charAt(currentChar.length - 1)
    setInputText(pre => pre + currentChar);
    resetTime()
    setOnce(true)
  } */
  
  /*console.log("loserName=",loser.name,", loser.Out",loser.out)
  console.log("inputText=",inputText)*/
  
  return (
    <Fragment>
      {JSON.stringify(wordList)}
        <Vscomputer inputText={inputText} val={val}/>
    </Fragment>

  )
})
export default Main