import { Fragment } from 'react'
import { useHistory } from 'react-router'
import LogoMpm from '../../assets/img/logoMpm.png'
import './styles/Indoor.css'

const Indoor = (props) => {
const history = useHistory()

return (
  <Fragment>
    <div className="w-screen h-screen grid">
      <nav className="w-screen h-8 flex justify-between">
        <img className="logo-mpm-navbar" src={LogoMpm} alt="Logo M.P.M." />
        <p>Menu</p>
      </nav>
      <div className="flex flex-col justify-items-center items-center">
        <h1 className="text-big text-bold divide-black">Street art en intérieur</h1>
        <h2 className="text-big text-bold">Vous l'avez voulu, il est venu.</h2>
        <ul>
          <li>
            <button className="w-screen border-2 mb-2" onClick={() => {history.push('/experience/indoor/scene')}}>
              <h1>(DIS)OBEY</h1>
              <h2>Un petit tour a Hong Kong</h2>
            </button>
          </li>
          <li>
            <button className="w-screen border-2" onClick={() => {history.push('/experience/indoor/scene')}}>
              <h1>Flower</h1>
              <h2>Mais pas par Kenzo</h2>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </Fragment>
)
}

export default Indoor;
