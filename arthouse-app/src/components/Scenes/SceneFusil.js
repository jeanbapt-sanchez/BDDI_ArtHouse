import './styles/SceneFusil.css'
import Fleur from '../../assets/animations-vid/fleur-transparent.gif'
import Fusil from '../../assets/img/02_Fusil/fusil-min.png'
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
        if(force > 240 && direction > 0 && direction < 15){
            // TODO : Déclencher l'animation de la
            console.log('GIF DU FUSIL QUI TIRE')
            fusilRef.current.src = 'GIF DU FUSIL QUI TIRE'
            const TEMPSGIFFUSIL = 1000
            setTimeout(() => {
                console.log('Image de fin DU FUSIL QUI TIRE')
                fusilRef.current.src = 'Image de fin DU FUSIL QUI TIRE'
            }, TEMPSGIFFUSIL)

            bodySceneFusilRef.current.removeEventListener('touchend', callBackShoot, true)
        }
    }


    return (
        <div ref={bodySceneFusilRef} className="body-sceneFusil w-full h-full absolute">
            <p>Coucou</p>
            <img ref={fusilRef} src={Fusil} alt="fusil" onClick={() => {
                // setIsFire(true)
            }} className="w-2/3 top-0 right-0"></img>
            {isFire && <img src={Fleur} ref={fleurRef} id="fusil" alt="fleurs" className="fleur-pop w-2/3 right-1/3"/>}
            <div ref={refRectangle} className="rectangle h-screen bg-grey w-1/3 bottom-O opacity-30"></div>
        </div>

    )
}

export default SceneFusil;