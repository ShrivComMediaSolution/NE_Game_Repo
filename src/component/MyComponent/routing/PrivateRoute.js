import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useTimerConsumer } from '../TimerContext'
import Timer from '../Timer'
console.log("PrivateRoute.js render 1");
const PrivateRoute = ({ component: Component}) => {
  const {seconds, loser } = useTimerConsumer()


return (<Route render={props => loser.out ? <Timer/> : (<Component {...props} />)} />)
}



export default PrivateRoute