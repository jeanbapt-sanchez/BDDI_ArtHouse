import '../styles/App.css';
// import logo from '../assets/img/logo.svg';
import {
  Switch,
  Route, useHistory
} from "react-router-dom";
import { useEffect, useState } from 'react';
import Interieur from './Interieur';
import VisualDesobediance from './VisualDesobediance';

function App() {
  let [isDesktop, setIsDesktop] = useState(true)
  let [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    if(screenWidth > 1600){
      console.log('setDesktop true')
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }
  }, [screenWidth])

  window.addEventListener('resize', () => {
    setScreenWidth(window.innerWidth)
  })

  let history = useHistory()
  let [currentPage, setCurrentPage] = useState('/')

  const handleChangePage = (e) => {
    console.log('azazaza', e)
  }

  return (
      <div className="App">
        {!isDesktop && 
        <div className="Mobile">
            {/* <button onClick={() => {history.push("/interieur")}}>Intérieur plz</button> */}
            <Switch>
              <Route path="/interieur">
                <Interieur onEndPage={handleChangePage}/>
              </Route>
              <Route path="/visualDesobedience">
                <VisualDesobediance />
              </Route>
            </Switch>
        </div>}
        {isDesktop &&
          <div className="Desktop">
          <h1>Desktop</h1>
        </div>}
      </div>
  );
}

export default App;
