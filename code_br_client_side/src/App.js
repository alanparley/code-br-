import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import StartScreen from './components/StartScreen'
import './App.css';
import Journal from './components/Inputs/Journal';
import Breathe from './components/Exercises/Breathe';
import Activities from './components/Activities';
import Mood from './components/Inputs/Mood';
import Sleep from './components/Inputs/Sleep';
import Tracker from './components/Tracker';
import Stats from './components/Stats';
import Meditate from './components/Exercises/Meditate';
import Inspire from './components/Inspire';
import Yoga from './components/Exercises/Yoga';
import Detail from './components/Detail'
import WaterIntake from './components/Inputs/WaterIntake';
import Screentime from './components/Inputs/Screentime';
import Loading from './components/Loading';


function App() {

  const [onWelcome, setOnWelcome] = useState(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setOnWelcome(false)
    }, 1000)
  })

  if (onWelcome === true) {
    return (
      <Loading />
    )
  }



  return (
    <Router>
      <>
        <h1 class="heading">code&lt;br&gt;</h1>
        <Switch>
          <Route exact path="/" component={StartScreen} />
          <Route path="/journal" component={Journal} />
          <Route path="/activities" component={Activities} />
          <Route path="/mystats" component={Stats} />
          <Route path="/meditate" component={Meditate} />
          <Route path="/yoga" component={Yoga} />
          <Route path="/inspire" component={Inspire} />
          <Route path="/breathe" component={Breathe} />
          <Route path="/mood" component={Mood} />
          <Route path="/sleep" component={Sleep} />
          <Route path="/detail" component={Detail} />
          <Route path="/tracker" component={Tracker} />
          <Route path="/waterintake" component={WaterIntake} />
          <Route path="/screentime" component={Screentime} />
        </Switch>
        <NavBar />
      </>
    </Router>
  );
}

export default App;
