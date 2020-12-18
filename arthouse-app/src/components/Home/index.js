import { Fragment } from 'react'
import { useHistory } from "react-router-dom";
import './styles/Home.css'
import LogoMpm from '../../assets/img/logoMpm.png'

const Home = () => {
  const history = useHistory()

  return (
    <Fragment>
      <div className="home-bg bg-cover w-screen h-screen grid">
        <button className="flex flex-col justify-center items-center" onClick={(e) => {history.push("experience")}}>
          <img className="logo-mpm" src={LogoMpm} alt="Logo M.P.M" ></img>
          <span className="font-montserrat-bold text-16 uppercase">Mon P'tit Musée</span>
        </button>
      </div>
    </Fragment>
  )
}

export default Home
