import Bg from '../../assets/img/01_Image/sol_et_fond.png'
import Armoire from '../../assets/img/01_Image/armoire.png'
import Flowers from '../../assets/img/01_Image/plan_horizontal.png'
import Table from '../../assets/img/01_Image/table.png'
import Cadre from '../../assets/img/01_Image/cadre.svg'
import './styles/SceneLivre.css'
const SceneLivre = () => {
    return(
        <div className="body w-screen h-screen overflow-hidden">
            <h1>Coucou, je suiss dans la scène livres</h1>
            <img src={Bg} alt="background" className="w-screen"/>
            <img src={Armoire} alt="armoire" className="z-1 w-5/12 right-0"></img>
            <img src={Flowers} alt="fleurs" className="bottom-40"/>
            <img src={Table} alt="table" className="bottom-0 z-10"/>
            {/* <img src={Cadre} alt="Cadre Obey" className="bottom-0 z-10"/> */}
        </div>
    )
}

export default SceneLivre;