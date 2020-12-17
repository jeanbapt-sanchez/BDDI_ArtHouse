import './styles/SceneFusil.css'
import Fusil from '../../assets/img/02_Fusil/fusil.gif'
import FusilShoot from '../../assets/animations-vid/fusil-with-fleur.gif'
import LastFrameShoot from '../../assets/img/02_Fusil/last-frame-fusil.gif'
import Tirer from '../../assets/gestures/geste_tirer.gif'
import Etale from '../../assets/img/02_Fusil/etal-min.png'
import Plan1 from '../../assets/img/02_Fusil/plan1-min.png'
import Plan2 from '../../assets/img/02_Fusil/plan2-min.png'
import Caisse from '../../assets/img/02_Fusil/plan3_caisse-min.png'
import Scene21 from '../../assets/audio/scene2.1.mp3'
import { useEffect, useRef, useState } from 'react'
import ZingTouch from 'zingtouch'

const SceneFusil = (props) => {

    let bodySceneFusilRef = useRef()
    let refRectangle = useRef()
    let fusilRef = useRef()
    let etaleRef = useRef()
    let plan1Ref = useRef()
    let plan2Ref = useRef()
    let caisseRef = useRef()
    let force = 0
    let direction = 0

    let [indicationShooting, setIndicationShooting] = useState(false)

    props.soundEffect.src = Scene21

    const callBackShoot = () => {
        refRectangle.current.style.transform = `translate(0%)`
        setIndicationShooting(false)

        if(force > 240 && (direction < 15 || direction > 350)){
            // TODO : Déclencher l'animation de la
            console.log('GIF DU FUSIL QUI TIRE')
            fusilRef.current.src = FusilShoot
            const TEMPSGIFFUSIL = 2500
            
            setTimeout(() => {
                console.log('Image de fin DU FUSIL QUI TIRE')
                fusilRef.current.src = LastFrameShoot
            }, TEMPSGIFFUSIL)

            bodySceneFusilRef.current.removeEventListener('touchend', callBackShoot, true)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            fusilRef.current.style.opacity = 1
            etaleRef.current.style.opacity = 1
            plan1Ref.current.style.left = '0'
            plan2Ref.current.style.right = '0'
            caisseRef.current.style.bottom = '66.6666%'
        }, 1000)
    }, [])

    useEffect(() => {    

        if(props.isVoice === true){
            props.soundEffect.play()
            const interval = setInterval(() => {
                console.log(props.soundEffect.currentTime)
                if(props.soundEffect.currentTime > 7.5){
                    // TODO : Lancer l'indication de gesture ainsi que l'opacité du BG
                    bodySceneFusilRef.current.style.opacity = .5
                    setIndicationShooting(true)
                    let zt = new ZingTouch.Region(bodySceneFusilRef.current)
    
                    const pan = new ZingTouch.Pan({
                        numInputs: 1
                    })
                    zt.bind(bodySceneFusilRef.current, pan, function(e){
                        e.preventDefault()
    
                        bodySceneFusilRef.current.style.opacity = 1
    
                        let data = e.detail.data[0]
                        // console.log(e.detail.data)
                        force = data.distanceFromOrigin
                        direction = data.directionFromOrigin
                        console.log(force, direction)
                        refRectangle.current.style.transform = `translate(${force / 10 }%)`
                        refRectangle.current.style.borderRadius = `${force}%`
                    }, false);
                
                    bodySceneFusilRef.current.addEventListener('touchend', callBackShoot, true)
                    clearInterval(interval)
                }
            }, 100)
        } else {
            console.log('mute')
            props.soundEffect.muted = true
        }
    }, [props.isVoice])

    return (
        <div>
            {indicationShooting && <img src={Tirer} alt="indication tirer" className="absolute top-0" />}
            <div ref={bodySceneFusilRef} className="body-sceneFusil w-full h-full absolute transition-opacity duration-700 ease-in-out">
                <img ref={fusilRef} src={Fusil} alt="fusil" className="fusil z-20"></img>
                <img ref={etaleRef} src={Etale} className="bottom-2/3 opacity-0 z-10" alt="plan1"/>
                <img ref={plan1Ref} src={Plan1} className="bottom-2/3 -left-full z-20" alt="plan1"/>
                <img ref={plan2Ref} src={Plan2} className="bottom-2/3 -right-full z-10" alt="plan2"/>
                <img ref={caisseRef} src={Caisse} className="-bottom-10" alt="caisse"/>
                <div ref={refRectangle} className="rectangle h-screen bg-grey w-1/3 bottom-O opacity-30"></div>

            </div>
        </div>
    )
}

export default SceneFusil;