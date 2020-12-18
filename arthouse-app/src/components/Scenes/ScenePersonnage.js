import './styles/scenePersonnage.css'
import { useEffect, useRef, useState } from "react";
import Bg from '../../assets/img/03_Etoile_et_marche/fond-min.png';
import Personnage from '../../assets/img/03_Etoile_et_marche/suite_png_marche/1.png'
import Bande from '../../assets/img/03_Etoile_et_marche/bande.png'
import Plan1 from '../../assets/img/03_Etoile_et_marche/plan1-min.png'
import Plan2 from '../../assets/img/03_Etoile_et_marche/plan2-min.png'
import Plan3 from '../../assets/img/03_Etoile_et_marche/plan3-min.png'
import Plan4 from '../../assets/img/03_Etoile_et_marche/plan4-min.png'
import Plan5 from '../../assets/img/03_Etoile_et_marche/plan5-min.png'
import Poteau from '../../assets/img/03_Etoile_et_marche/poteau-min.png'
import Aeration from '../../assets/img/03_Etoile_et_marche/aeration-min.png'
import Walk from '../../assets/gestures/geste_marche.gif'
import Scene31 from '../../assets/audio/scene3.1.mp3'
import { ScrollTo, ScrollArea } from "react-scroll-to";

const ScenePersonnage = (props) => {
    let [isIndicationWalk, setIsIndicationWalk] = useState(false)

    let bodyScenePersoRef = useRef()    
    let personnageRef = useRef()
    let bandeRef = useRef()
    let walkRef = useRef()
    let fadeRef = useRef()
    
    props.soundEffect.src = Scene31

    useEffect(() => {
        setTimeout(() => {
            bodyScenePersoRef.current.style.opacity = 1
        }, 1000)
        // setTimeout(() => {
        //     personnageRef.current.style.opacity = 1
        // }, 3000) 

    }, [])

    const callBackUpdate = () => {
        setIsIndicationWalk(true)
    }

    useEffect(() => {
        if(isIndicationWalk){
            setTimeout(() => {
                fadeRef.current.style.opacity = .5

            }, 1000)
        }
    }, [isIndicationWalk])


    if(props.isVoice === true){
        try{
            props.soundEffect.play()
            // props.soundEffect.addEventListener("ended", callBackUpdate, true);
        } catch(e){
            console.log('erreur', e)
        }
    }

    // useEffect(() => {    
    //     if(props.isVoice === true){
    //     }
    // }, [props.isVoice])
    
    return (
        <div className="overflow-y-hidden">
            <div ref={bodyScenePersoRef} className="body-scenePersonnage bottom-0 left-0 absolute overflow-y-hidden overflow-x-scroll">
                <img src={Bg} alt="murStreetArt" className="mur-fond h-screen"/>
                <img src={Personnage} ref={personnageRef} alt="Personnage" id="personnage" className="perso bottom-0 absolute w-1/2 opacity-1 transition-opacity duration-500 ease-in-out"/>
                <img src={Plan1} alt="Plan1" id="Plan1" className="collage collage-1 z-100 bottom-0 absolute w-1/2 opacity-1 transition-opacity duration-500 ease-in-out"/>
                <img src={Plan2} alt="Plan2" id="Plan2" className="collage collage-2 bottom-0 absolute w-1/2 opacity-1 transition-opacity duration-500 ease-in-out"/>
                <img src={Plan3} alt="Plan3" id="Plan3" className="collage collage-3 z-40 bottom-0 absolute w-1/2 opacity-1 transition-opacity duration-500 ease-in-out"/>
                <img src={Plan4} alt="Plan4" id="Plan4" className="collage collage-4 z-20 bottom-0 absolute w-1/2 opacity-1 transition-opacity duration-500 ease-in-out"/>
                <img src={Plan5} alt="Plan5" id="Plan5" className="collage bottom-0 absolute w-1/2 opacity-1 transition-opacity duration-500 ease-in-out"/>
                <img src={Poteau} alt="Poteau" id="Poteau" className="collage bottom-0 absolute w-1/2 opacity-1 transition-opacity duration-500 ease-in-out"/>
                {/* <img src={Aeration} alt="Aeration" id="Aeration" className="aeration bottom-0 absolute w-1/4 opacity-1 transition-opacity duration-500 ease-in-out"/> */}
                <img src={Bande} ref={bandeRef} alt="Bande" id="bande" className="bande-cote sticky bottom-0 left-0 h-screen absolute"/>
                {isIndicationWalk && <img src={Walk} ref={walkRef} alt="Bande" id="bande" className="bottom-0 h-screen absolute"/>}
            </div>
            <div ref={fadeRef} className="rect-full-body absolute bg-grey opacity-0 top-0"></div>
        </div>
    )
}

export default ScenePersonnage;