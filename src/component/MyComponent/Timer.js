import React, { Fragment,useState,useEffect} from 'react'
import {Redirect,useHistory} from 'react-router-dom'
import {browserHistory} from 'react-router'
import { useTimerConsumer,useTimerConsumerUpdate } from './TimerContext'
import {Link} from 'react-router-dom'
import {useCharacterConsumer} from './CharacterContext'
import {useCharacterConsumerUpdate} from './CharacterContext'

export const Timer = () => {
  console.log("Time rendring")
   /* function refreshPage() {
    window.location.reload(false)
  } */ 
  const {seconds, loser } = useTimerConsumer()
  const {setLoser,resetTime,setIsActive}=useTimerConsumerUpdate();

  const {round}=useCharacterConsumer();
    const {setRound,setInputText,setRoundList}=useCharacterConsumerUpdate();
    const history = useHistory()
    const [finish,setFinish]=useState(false)

  const onClick=()=>{
  
    setLoser({name:'You',out:false})
    setRound(pre=>pre+1)
    setIsActive(true)
    resetTime();
  }

  useEffect(() => {
    if(round>4){
        setFinish(true)
        setIsActive(false)
    }   
  }, [round])

 /*  const redirect = () => {
      setFinish(false)
   return browserHistory.replace('/')
  } */
  const redirect = () => {
    setIsActive(false)
    setFinish(false)
    setRound(1)
    resetTime();
    setLoser({name:'You',out:false})
    return history.push('/')
  }
  /*console.log("seconds=",seconds)
  console.log("Rounds=",round)
  console.log("TimeFinish=",finish)*/
  return (
    <Fragment>
       {/* {!loser.out ?
        <div className='time-main'><p>Time Left</p><div className='timer'>{seconds}</div></div> : */}

        {finish===true?<Fragment><div className="finish"><button className="btn btn-primary" onClick={redirect}>New Match</button></div></Fragment> :
        <Fragment><h1>{loser.name} Lost {console.log("loserOut=",loser.out)}</h1>
        <br></br>
        <Link to='/main'><h1><button className='btn btn-info' onClick={onClick}>Next Round</button></h1></Link>
        </Fragment>
        }
        
        
    </Fragment>
  )
}
export default Timer
