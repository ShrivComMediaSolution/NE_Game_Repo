import React, { useState, useEffect, Fragment } from 'react'
import Vscomputer from '../Vscomputer'
import axios from 'axios'
import { useTimerConsumer, useTimerConsumerUpdate } from './TimerContext'
import {useCharacterConsumer,useCharacterConsumerUpdate} from './CharacterContext'


var found,notfound;
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
  useEffect(()=>{
    console.log("inputText updated=",inputText)
  },[inputText])
//Fetching Data API
useEffect(async() => {
  if(inputText.length===2){ 
    console.log("before calling get word",inputText,",",inputText.length)

    //{loser.out && 
    setLoading(true)

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
       
  //}
    
}
  
}, [inputText])




useEffect(()=>{
  console.log("calling turn controler from useEffect")
  turnControler();
  console.log("Exit useEffect after calling turn contlr")
},[wordList,inputText])


  
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
   console.log("inside computer turn")
    once && setTimeout(() => {
     
      setLoser({name:'Computer',out:false});
    
      let char=findChar()
      
      char=char.charAt(0).toUpperCase()
      console.log("next computer char=",char)
      setInputText(pre => pre + char);
      resetTime()
      console.log("computer added guesschar",char,",",inputText)
      //setOnce(false)
     
    }, 2000)
    
  }
  
/////////////////////////////////////////////
  //Find character form random word
  const findChar=()=>{

        const randomword = Math.floor(Math.random() * wordList.length);
        console.log("INFO=",wordList,",",wordList.length,",",randomword)
        const guesschar=wordList[randomword].word.charAt((inputText.length))
        console.log("computer picked letter from=",wordList[randomword].word,",",guesschar)
        setOnce(false)
        return guesschar
        
  } 

  const turnControler=()=>{
    
    console.log("inside turn controler  1 check word exist",inputText)
    if((loser.name==='You' || loser.name==='Computer') && wordList.length>0){
      
      found=wordList.find((item)=>{
        console.log("search=",inputText," in ",item.word,",",item.word.substring(0,inputText.length))
        return (item.word.toUpperCase()===inputText.toUpperCase())
      })

      if(!found){
      notfound=wordList.find((item)=>{
              console.log("notfound=",inputText.toUpperCase(),"===",item.word.substring(0,inputText.length).toUpperCase(),",",inputText.toUpperCase()===item.word.substring(0,inputText.length).toUpperCase())
              return (((inputText.toUpperCase()===item.word.substring(0,inputText.length).toUpperCase())))
          
            })
      }
      
    
      if(found || !notfound){
        console.log("word Found=",found,",",notfound)
        console.log("user=",loser.name,",",loser.out)
        setLoser(pre=>({...loser,out:true}));
        console.log("now user=",loser.name,",",loser.out)
        setIsActive(false)
        setOnce(false)
        clearTimeout()
        return 
      }
      else{
        console.log("inside turn controler word not exist  val= ",found,",",notfound)
      }
    }
    
      if(once && wordList.length>0){
        console.log("inside turn controler calling computer turn")
      computerTurn()
    }
  }

  
  return (
    <Fragment>
      {/* {JSON.stringify(wordList)} */}
        <Vscomputer inputText={inputText} val={found}/>
    </Fragment>

  )
})
export default Main