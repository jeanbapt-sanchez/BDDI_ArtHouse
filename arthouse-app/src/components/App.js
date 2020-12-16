import '../styles/App.css';
// import logo from '../assets/img/logo.svg';
import {
  Switch,
  Route
} from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import Interieur from './Interieur';
import SceneLivre from './Scenes/SceneLivre';

function App() {
  let [isDesktop, setIsDesktop] = useState(true)
  let [screenWidth, setScreenWidth] = useState(window.innerWidth)
  let [isMute, setIsMute] = useState(false)

  // let history = useHistory()

  let btnSound = useRef(null)

  useEffect((history) => {
    if(screenWidth > 1600){
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
      if(isMute === true){
        setTimeout(() => {
          btnSound.current.innerHTML = 'Demute'
        }, 1) 
      } else {
        setTimeout(() => {
          btnSound.current.innerHTML = 'Mute'
        }, 1)       }
    }
  }, [screenWidth, isMute])


  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth)
  })

  return (
      <div className="App font-display w-full h-screen">
        {!isDesktop && 
        <div className="Mobile w-full h-screen">
            {/* <h1 className="text-big font-bold">Hello les gens</h1>
            <button onClick={() => {history.push('/interieur')}}>Intérieur</button> */}
            <Switch>
              <Route path="/interieur">
                <Interieur />
              </Route>
              <Route path="/sceneLivre">
                <SceneLivre isMute={isMute}/>
              </Route>
            </Switch>
            <button className="muteBtn absolute bottom-10 z-80" ref={btnSound} onClick={() => {setIsMute(!isMute)}}>Mute</button>
        </div>}
        {isDesktop &&
          <div className="Desktop">
          <h1>Desktop</h1>
        </div>}
        
      </div>
  );
}

export default App;
