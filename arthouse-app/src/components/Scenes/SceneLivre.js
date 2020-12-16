import Bg from '../../assets/img/01_Image/sol_et_fond.png'
import Armoire from '../../assets/img/01_Image/armoire.png'
import Flowers from '../../assets/img/01_Image/plan_horizontal.png'
import Table from '../../assets/img/01_Image/table.png'
// import Cadre from '../../assets/img/01_Image/cadre.svg'
import Shake from '../../assets/gestures/shake.gif'
import AudioS1 from '../../assets/audio/scene1.mp3'
import AudioS2 from '../../assets/audio/scene2.1.mp3'
import './styles/SceneLivre.css'
import { useEffect, useRef, useState } from 'react'
import Boussole from '../../assets/gestures/boussole-02.svg'
import FlecheBoussole from '../../assets/gestures/boussole-03.svg'

const SceneLivre = (props) => {
    let bodySceneLivre = useRef(null)
    let armoirRef = useRef(null)
    let fleursRef = useRef(null)
    let tableRef = useRef(null)
    let shakeRef = useRef(null)
    let audioRef = useRef(null)
    let audioRef2 = useRef(null)
    
    let [gestureIsDisplay, setGestureIsDisplay] = useState(false)
    let [progressionFaceDisplaying, setProgressionFaceDisplaying] = useState(0)
    let [compassIsDisplay, setCompassIsDisplay] = useState(false)
    let [currentScene, setCurrentScene] = useState('scene1')

    useEffect(() => {
        setTimeout(() => {
            // console.log('lancer livre',
            // // bodySceneLivre.current.style.opacity = .5,
            // armoirRef.current.style.transform = 'translateX(-80%)',
            // fleursRef.current.style.transform = 'translateY(200%)',
            // tableRef.current.style.transform = 'translateY(-100%)',
            // )
            console.log(audioRef)
        }, 1000)
        setTimeout(() => {
            setGestureIsDisplay(true)
            shakeRef.current.style.opacity = 1
        }, 2000)
    }, [])

    useEffect(() => {
        if(progressionFaceDisplaying === 10){
            // TODO : passer à l'animation suivante
            // bodySceneLivre.current.style.opacity = 1
            setGestureIsDisplay(false)
            console.log('égale à 10')
            setTimeout(() => {
                // setAudioS1(true)
            }, 500)
        } else if (progressionFaceDisplaying === 2){
            setGestureIsDisplay(false)
        }
    }, [progressionFaceDisplaying])

    useEffect(() => {
        if(props.isMute === true && audioRef.current.currentTime < 3){
            audioRef.current.play()
        } else if (audioRef.current.currentTime < 3){
            console.log('audioRef1 paused')
            audioRef.current.pause()
        } else if (props.isMute === true && audioRef.current.currentTime > 3){
            audioRef2.current.play()
        } else if (audioRef.current.currentTime > 3){
            console.log('audioRef1 paused après 3s')
            audioRef.current.pause()
            audioRef2.current.pause()
        }
    }, [props.isMute])


    let img = document.querySelector('.img')
    try{
        window.addEventListener('devicemotion', function(event) {
        
        if(event.acceleration.y > 50){
            setProgressionFaceDisplaying(progressionFaceDisplaying + 1)
            console.log(progressionFaceDisplaying)
        }
        // img.style.opacity = progressionFaceDisplaying / 10
        if(progressionFaceDisplaying === 10){
            // TODO : passer à l'animation suivante
            // bodySceneLivre.current.style.opacity = 1
            setGestureIsDisplay(false)
            console.log('égale à 10')
        } else if (progressionFaceDisplaying === 2){
            setGestureIsDisplay(false)
        }
    });
    } catch (e){
        console.log('erreur', e)
    }

    return(
        <div ref={bodySceneLivre} className="body w-screen h-screen overflow-hidden transition duration-700 ease-in-out">
            <h1>Coucou, je suiss dans la scène livres</h1>
            <img src={Bg} alt="background" className="w-screen"/>
            <img ref={armoirRef} src={Armoire} alt="armoire" className="z-1 w-5/12 -right-40 transition-form duration-700 ease-in-out"></img>
            <img ref={fleursRef} src={Flowers} alt="fleurs" className="-top-80"/>
            <img ref={tableRef} src={Table} alt="table" className="z-10 -bottom-80"/>
            {/* <img src={Cadre} alt="Cadre Obey" className="bottom-0 z-10"/> */}
            {gestureIsDisplay && <img ref={shakeRef} src={Shake} alt="shake" className="opacity-0"/>}
            <button className="bottom-0 disa" onClick={() => {
                setProgressionFaceDisplaying(10)
                // Là je lance dans x secondes l'indication gesture qu'il faut tourner son téléphone vers le sud
                setTimeout(() => {
                    setCompassIsDisplay(true)
                }, 7000)

                audioRef2.current.play()
            }
                }>Quitter le shake</button>
            <audio ref={audioRef}
                src={AudioS1}>
                    Your browser does not support the
                    <code>audio</code> element.
            </audio>
            <audio ref={audioRef2}
                src={AudioS2}>
                    Your browser does not support the
                    <code>audio</code> element.
            </audio>
            {compassIsDisplay && <img src={Boussole} class="w-40" alt="fleche boussole" />}
        </div>
    )
}

export default SceneLivre;