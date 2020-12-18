import { Fragment } from 'react'
import { useHistory } from "react-router-dom";

const Experience = () => {
  const history = useHistory()

  const handleChooseExperience = (e) => {
    const experienceType = e.target.id
    console.log(experienceType);
    history.push(`experience/${experienceType}`)
  }

  return (
    <Fragment>
      <div className="w-screen h-screen grid">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-montserrat-bold text-16 w-32 text-center mb-3">Souhaitez vous une expérience...</h1>
          <button className="font-montserrat-bold font-bold text-21 border-2 border-white-500 rounded-2xl px-8 py-2 mb-3" onClick={(e) => handleChooseExperience(e)} id='indoor'>
            À l'intérieur
          </button>
          <button className="font-montserrat-bold font-bold text-21 border-2 border-white-500 rounded-2xl px-8 py-2" onClick={(e) => handleChooseExperience(e)} id='outdoor'>
            À l'extérieur
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default Experience
