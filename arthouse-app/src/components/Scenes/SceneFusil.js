import './styles/SceneFusil.css'
import Fusil from '../../assets/img/02_Fusil/fusil.gif'
import FusilShoot from '../../assets/animations-vid/fusil-with-fleur.gif'
import LastFrameShoot from '../../assets/img/02_Fusil/last-frame-fusil.gif'
import FleurEclot from '../../assets/img/02_Fusil/fleur-eclot.gif'
import { useEffect, useRef, useState } from 'react'
import ZingTouch from 'zingtouch'

const SceneFusil = () => {

    let [isFire, setIsFire] = useState(false)

    let fleurRef = useRef()
    let bodySceneFusilRef = useRef()
    let refRectangle = useRef()
    let fusilRef = useRef()
    let force = 0
    let direction = 0

    useEffect(() => {
        if(isFire === true){
            setTimeout(() => {
                console.log('changement de source')
                fleurRef.current.src = FleurEclot
            }, 2700)
        }


        let zt = new ZingTouch.Region(bodySceneFusilRef.current)

        const pan = new ZingTouch.Pan({
            numInputs: 1
        })
        zt.bind(bodySceneFusilRef.current, pan, function(e){
            e.preventDefault()
            let data = e.detail.data[0]
            // console.log(e.detail.data)
            force = data.distanceFromOrigin
            direction = data.directionFromOrigin
            console.log(force, direction)
            refRectangle.current.style.transform = `translate(${force / 10 }%)`
            refRectangle.current.style.borderRadius = `${force}%`
        }, false);
    
        bodySceneFusilRef.current.addEventListener('touchend', callBackShoot, true)

    }, [isFire])

    const callBackShoot = () => {
        refRectangle.current.style.transform = `translate(0%)`
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


    return (
        <div ref={bodySceneFusilRef} className="body-sceneFusil w-full h-full absolute">
            <img ref={fusilRef} src={Fusil} alt="fusil" onClick={() => {
                // setIsFire(true)
            }} className="fusil top-1/4"></img>
            <div ref={refRectangle} className="rectangle h-screen bg-grey w-1/3 bottom-O opacity-30"></div>
        </div>

    )
}

export default SceneFusil;