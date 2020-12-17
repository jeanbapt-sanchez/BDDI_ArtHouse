import './styles/SceneFusil.css'
import Fleur from '../../assets/animations-vid/fleur-transparent.gif'
import Fusil from '../../assets/img/02_Fusil/fusil-min.png'

const SceneFusil = () => {
    return (
        <div class="body-sceneFusil w-full h-full absolute">
            <p>Coucou</p>
            <img src={Fusil} alt="fusil" className="w-2/3 bottom-0 right-0"></img>
            <img src={Fleur} id="fusil" alt="fleurs" className="fleur-pop w-2/3 right-1/3"/>
        </div>

    )
}

export default SceneFusil;