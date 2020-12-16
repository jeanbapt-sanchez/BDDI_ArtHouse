import Bg from '../../assets/img/01_Image/sol_et_fond.png'
import Armoire from '../../assets/img/01_Image/armoire.png'
import Flowers from '../../assets/img/01_Image/plan_horizontal.png'
import Table from '../../assets/img/01_Image/table.png'
import Cadre from '../../assets/img/01_Image/cadre.svg'
import Shake from '../../assets/gestures/shake.mp4'
import './styles/SceneLivre.css'
import { useEffect, useRef } from 'react'

const SceneLivre = () => {
    let bodySceneLivre = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            console.log('lancer livre', bodySceneLivre.current.style.opacity = .5)
        }, 1000)
    }, [])

    let progressionFaceDisplaying = 0
    let img = document.querySelector('.img')
    try{
        window.addEventListener('devicemotion', function(event) {
        
        if(event.acceleration.y > 50){
            progressionFaceDisplaying++
            console.log(progressionFaceDisplaying)
        }
        // img.style.opacity = progressionFaceDisplaying / 10
        if(progressionFaceDisplaying === 10){
            // TODO : passer à l'animation suivante
            bodySceneLivre.current.style.opacity = 1
        }
    });
    } catch (e){
        console.log('erreur', e)
    }

    return(
        <div ref={bodySceneLivre} className="body w-screen h-screen overflow-hidden transition duration-700 ease-in-out">
            <h1>Coucou, je suiss dans la scène livres</h1>
            <img src={Bg} alt="background" className="w-screen"/>
            <img src={Armoire} alt="armoire" className="z-1 w-5/12 right-0"></img>
            <img src={Flowers} alt="fleurs" className="bottom-40"/>
            <img src={Table} alt="table" className="bottom-0 z-10"/> 
            {/* <img src={Cadre} alt="Cadre Obey" className="bottom-0 z-10"/>
            {/* <video allow='autoplay; encrypted-media' controls>
                <source src={Shake} type="video/mp4"/>
            </video> */}
        </div>
    )
}

export default SceneLivre;