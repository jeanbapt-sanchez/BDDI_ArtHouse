import '../styles/App.css';
// import logo from '../assets/img/logo.svg';
import {
  Switch,
  Route
} from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import Interieur from './Interieur';
import SceneLivre from './Scenes/SceneLivre';
import Sound from '../assets/pictos/sound.svg'
import NoSound from '../assets/pictos/no-sound.svg'

function App() {
  let [isDesktop, setIsDesktop] = useState(true)
  let [screenWidth, setScreenWidth] = useState(window.innerWidth)
  let [isMute, setIsMute] = useState(false)
  let [soundNotAccepted, setSoundNotAccepted] = useState(true)
  // let history = useHistory()

  let soundRef = useRef(null)
  let soundEffect = new Audio();

  useEffect((history) => {

    if(screenWidth > 1600){
      setIsDesktop(true)
    } else if(soundNotAccepted === false){
      setIsDesktop(false)
        if(isMute === true){
          setTimeout(() => {
            soundRef.current.src = Sound
          }, 1) 
        } else {
            setTimeout(() => {
              console.log(soundRef)
              soundRef.current.src = NoSound
            }, 1)
          }
    }
  }, [screenWidth, isMute, soundNotAccepted])


  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth)
  })

  return (
      <div className="App font-display w-full h-screen">
        {soundNotAccepted && 
          <div className="absolute top-1/2 left-1/2 text-white cursor-pointer">
            <button onClick={() => {
              setSoundNotAccepted(false)
                soundEffect.play()  
              }
            }>J'accepte d'écouter de la musique</button>
          </div>}
        {!isDesktop && !soundNotAccepted &&
        <div className="Mobile w-full h-screen">
            <p><img 
            src={Sound} 
            ref={soundRef} 
            alt="sound" 
            onClick={() => {setIsMute(!isMute)}} 
            className="sound absolute left-5 top-4 w-10 z-80 cursor-pointer"
            /></p>
            <Switch>
              <Route path="/interieur">
                <Interieur />
              </Route>
              <Route path="/sceneLivre">
                <SceneLivre isMute={isMute} soundEffect={soundEffect}/>
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
