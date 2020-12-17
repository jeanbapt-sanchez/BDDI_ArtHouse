import './styles/SceneFusil.css'
import Fleur from '../../assets/animations-vid/fleur-transparent.gif'
import Fusil from '../../assets/img/02_Fusil/fusil-min.png'
import FleurEclot from '../../assets/img/02_Fusil/fleur-eclot.gif'
import { useEffect, useRef, useState } from 'react'

const SceneFusil = () => {

    let [isFire, setIsFire] = useState(false)

    let fleurRef = useRef()

    useEffect(() => {
        if(isFire === true){
            setTimeout(() => {
                console.log('changement de source')
                fleurRef.current.src = FleurEclot
            }, 2700)
        }
    }, [isFire])

    return (
        <div class="body-sceneFusil w-full h-full absolute">
            <p>Coucou</p>
            <img src={Fusil} alt="fusil" onClick={() => {
                setIsFire(true)
            }} className="w-2/3 bottom-0 right-0"></img>
            {isFire && <img src={Fleur} ref={fleurRef} id="fusil" alt="fleurs" className="fleur-pop w-2/3 right-1/3"/>}
        </div>

    )
}

export default SceneFusil;