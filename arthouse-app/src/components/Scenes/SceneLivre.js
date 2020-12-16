import Bg from '../../assets/img/01_Image/sol_et_fond.png'
import Armoire from '../../assets/img/01_Image/armoire.png'
import Flowers from '../../assets/img/01_Image/plan_horizontal.png'
import Table from '../../assets/img/01_Image/table.png'
import Cadre from '../../assets/img/01_Image/cadre_photo.svg'
import Visage from '../../assets/img/01_Image/visage_seul_1.svg'
import Shake from '../../assets/gestures/geste_shake.gif'
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
    let boussoleRef = useRef(null)
    let flecheBoussoleRef = useRef(null)
    let visageRef = useRef(null)
    
    let [gestureIsDisplay, setGestureIsDisplay] = useState(false)
    let [progressionFaceDisplaying, setProgressionFaceDisplaying] = useState(0)
    let [compassIsDisplay, setCompassIsDisplay] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            bodySceneLivre.current.style.opacity = .5
            armoirRef.current.style.transform = 'translateX(-80%)'
            fleursRef.current.style.transform = 'translateY(200%)'
            tableRef.current.style.transform = 'translateY(-100%)'
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
            setTimeout(() => {
                // setAudioS1(true)
            }, 500)
        } else if (progressionFaceDisplaying === 2){
            setGestureIsDisplay(false)
        }
    }, [progressionFaceDisplaying])

    useEffect(() => {
        if(props.isMute === true && audioRef.current.currentTime < 1){
            audioRef.current.play()
        } else if (audioRef.current.currentTime < 1){
            audioRef.current.pause()
        } else if (props.isMute === true && audioRef.current.currentTime > 1){
            audioRef2.current.play()
        } else if (audioRef.current.currentTime > 1){
            audioRef.current.pause()
            audioRef2.current.pause()
        }
    }, [props.isMute])

    try{
        window.addEventListener('devicemotion', function(event) {
        
        if(event.acceleration.y > 50){
            setProgressionFaceDisplaying(progressionFaceDisplaying + 1)
            console.log(progressionFaceDisplaying)
            visageRef.current.style.opacity = progressionFaceDisplaying
        }
        // img.style.opacity = progressionFaceDisplaying / 10
        if(progressionFaceDisplaying === 10){
            // TODO : passer à l'animation suivante
            // bodySceneLivre.current.style.opacity = 1

            setGestureIsDisplay(false)
        } else if (progressionFaceDisplaying === 2){
            setGestureIsDisplay(false)
        }
    });
    } catch (e){
        console.log('erreur', e)
    }

    if (window.DeviceOrientationEvent) {
        // Listen for the deviceorientation event and handle the raw data
        window.addEventListener('deviceorientation', function(event) {
            let compassdir;

            if(event.webkitCompassHeading) {
                // Apple works only with this, alpha doesn't work
                compassdir = event.webkitCompassHeading;  
                console.log(compassdir)
            }
            else compassdir = event.alpha;

            compassdir = -compassdir
            boussoleRef.current.style.transform = `rotate(${compassdir}deg)`
            // console.log(boussole.style.transform)
            if(-compassdir > 179 && -compassdir < 181){
                // TODO : Déclencher l'animation 
                console.log('DECLENCHED ANINMATION')
            }
            
        });
}

    return(
        <div>
            <div ref={bodySceneLivre} className="body w-screen h-screen overflow-hidden transition duration-700 ease-in-out">
                <h1>Coucou, je suiss dans la scène livres</h1>
                <img src={Bg} alt="background" className="w-screen"/>
                <img ref={armoirRef} src={Armoire} alt="armoire" className="z-1 w-5/12 -right-40 transition-form duration-700 ease-in-out"></img>
                <img ref={fleursRef} src={Flowers} alt="fleurs" className="-top-80"/>
                <img ref={tableRef} src={Table} alt="table" className="z-10 -bottom-80"/>
                <img src={Cadre} alt="cadre" className="w-60 z-10 bottom-60 left-1/4"/>
                <img src={Visage} ref={visageRef} alt="visage" className="visage ml-1 z-10 bottom-60 left-1/4 opacity-0"/>
                {/* <img src={Cadre} alt="Cadre Obey" className="bottom-0 z-10"/> */}

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

            </div>
            <button className="bottom-0 disa absolute" onClick={() => {
                    setProgressionFaceDisplaying(10)
                    // Là je lance dans x secondes l'indication gesture qu'il faut tourner son téléphone vers le sud
                    setCompassIsDisplay(true)
                    setTimeout(() => {
                        //TO DO : Assigner la bonne valeur au setTimeout avec le temps de parole du visage
                        boussoleRef.current.style.opacity = 1
                        flecheBoussoleRef.current.style.opacity = 1
                    }, 1000)

                    audioRef2.current.play()
                }
                    }>Quitter le shake</button>
            {gestureIsDisplay && <img ref={shakeRef} src={Shake} alt="shake" className="anim absolute top-0 opacity-0 z-50"/>}
            {compassIsDisplay && <img ref={boussoleRef} src={Boussole} className="w-40 absolute transform left-1/3  top-1/3 opacity-0 transition duration-500 ease-in-out" alt="fleche boussole" />}
            {compassIsDisplay && <img ref={flecheBoussoleRef} src={FlecheBoussole} className="w-20 absolute left-1/3 ml-10 mt-2 transform rotate-180 top-1/4 opacity-0 transition duration-500 ease-in-out" alt="fleche boussole" />}
        </div>
        
    )
}

export default SceneLivre;