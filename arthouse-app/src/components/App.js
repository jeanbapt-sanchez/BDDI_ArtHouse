import '../styles/App.css';
// import logo from '../assets/img/logo.svg';
import {
  Switch,
  Route, useHistory
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Interieur from './Interieur';
import SceneLivre from './Scenes/SceneLivre';

function App() {
  let [isDesktop, setIsDesktop] = useState(true)
  let [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  let history = useHistory()

  useEffect((history) => {
    console.log('useEffect lancé')
    if(screenWidth > 1600){
      console.log('setDesktop true')
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }
  }, [screenWidth])


  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth)
  })

  return (
      <div className="App font-display">
        {!isDesktop && 
        <div className="Mobile">
            {/* <h1 className="text-big font-bold">Hello les gens</h1>
            <button onClick={() => {history.push('/interieur')}}>Intérieur</button> */}
            <Switch>
              <Route path="/interieur">
                <Interieur />
              </Route>
              <Route path="/sceneLivre">
                <SceneLivre />
              </Route>
            </Switch>
        </div>}
        {isDesktop &&
          <div className="Desktop">
          <h1>Desktop</h1>
        </div>}
      </div>
  );
}

export default App;
