import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './component/Home';
import Forgot from './component/Forgot';

import React from 'bootstrap/dist/css/bootstrap.min.css';

import Signup from './component/Signup';
import Header from './component/Header';
import Setting from './component/Setting';
import Footer from './component/Footer';
import Register from './component/Register';
import Update from './component/Update';
import Vscomputer from './component/Vscomputer';
import Playfrind from './component/Playfrind';
import Word from './component/Word';
import Post from './component/Post';
import Notifiction from './component/Notifiction';
import Get from './component/Get';
///My Import//
import { TimerProvider } from './component/MyComponent/TimerContext'
import Main from './component/MyComponent/Main'
import PrivateRoute from './component/MyComponent/routing/PrivateRoute'
import { CharacterProvider } from './component/MyComponent/CharacterContext';
import Timer from './component/MyComponent/Timer'


function App() {
  return (
    <div>
      <Header />
      <TimerProvider>
        <CharacterProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/forgot" component={Forgot} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/setting" component={Setting} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/update" component={Update} />
            <Route exact path='/Timer' component={Timer} />
             {/* <Route exact path='/main' component={Main} />  */}
             <PrivateRoute exact path='/main' component={Main} /> 
            <Route exact path="/playfrind" component={Playfrind} />
            <Route exact path="/word" component={Word} />
            <Route exact path="/Post" component={Post} />
            <Route exact path="/notifiction" component={Notifiction} />
            <Route exact path="/get" component={Get} />
          </Switch>
        </CharacterProvider>
      </TimerProvider>
      <Footer />

    </div>
  );
}

export default App;
