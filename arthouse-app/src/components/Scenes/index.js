import { Fragment, useEffect, useState, useRef} from 'react'
import Sound from '../../assets/pictos/sound.svg'
import NoSound from '../../assets/pictos/no-sound.svg'
import SceneLivre from './SceneLivre';
import Headphones from '../../assets/img/headphones.png'

const Scene = (props) => {
  const [isDesktop, setIsDesktop] = useState(true)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [isVoice, setisVoice] = useState(false)
  const [soundNotAccepted, setSoundNotAccepted] = useState(true)
  const soundRef = useRef(null)

  useEffect((history) => {
    if(screenWidth > 1600){
      setIsDesktop(true)
    } else if(soundNotAccepted === false){
      setIsDesktop(false)
        if(isVoice === true){
          setTimeout(() => {
            soundRef.current.src = Sound
            // soundEffect.play()
          }, 1) 
        } else {
            setTimeout(() => {
              console.log(soundRef)
              soundRef.current.src = NoSound
              // soundEffect.pause()
            }, 1)
          }
    }
  }, [screenWidth, isVoice, soundNotAccepted])

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth)
  })

  const playAudio = () => {
    setSoundNotAccepted(false)
    props.soundEffect.play()
  }

  return (
    <Fragment>
      <div className="w-full h-screen text-center grid">
        {soundNotAccepted &&
          <div className="flex flex-col justify-center items-center mx-auto w-40">
            <img src={Headphones} alt="headphones" />
            <p>Le casque est nécessaire lors de cette expérience</p>
            <button className="border-2 border-white-500 rounded-xl px-4" onClick={() => playAudio()}><p>J'autorise</p></button>
          </div>}
          {!isDesktop && !soundNotAccepted &&
            <div className="Mobile w-full h-screen">
              <p>
                <img
                  src={Sound}
                  ref={soundRef}
                  alt="sound"
                  onClick={() => {setisVoice(!isVoice)}}
                  className="sound absolute left-5 top-4 w-10 z-80 cursor-pointer"/>
              </p>
              <SceneLivre isVoice={isVoice} soundEffect={props.soundEffect} soundNotAccepted={soundNotAccepted}/>
            </div>
          }
      </div>
    </Fragment>
  )
}

export default Scene
