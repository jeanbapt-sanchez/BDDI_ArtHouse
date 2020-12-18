import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home/index'
import Experience from './Experience/index'
import Inside from './Indoor/index';
import ArMenu from './ArMenu/index';
import Scene from './Scenes/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/experience">
          <Experience/>
        </Route>
        <Route exact path="/experience/indoor">
          <Inside/>
        </Route>
        <Route exact path="/experience/indoor/scene">
          <Scene/>
        </Route>
        <Route exact path="/experience/indoor/ar">
          <ArMenu />
        </Route>
        <Route exact path="/experience/outdoor">
          <p>Sorry Outdoor Experience is not available for demo</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
