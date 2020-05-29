import React from 'react';
import './App.css';

// rect router
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

// components
import Multiplier from './components/Multiplier';
import EvenClicks from './components/EvenClicks';
import CountBy from './components/CountBy';
import HideMe from './components/HideMe';
import MinimumLength from './components/MinimumLength';


function App() {
  return (
    <Router>
      <div className="text-center mt-4">
        <Switch>
          <Route exact path="/multiplier/:x/:y" render={({ match }) => (
            <Multiplier x={match.params.x} y={match.params.y} />
          )} />
          <Route exact path="/even-clicks" component={EvenClicks} />
          <Route exact path="/count-by/:step" render={({ match }) => (
            <CountBy step={match.params.step} />
          )} />
          <Route exact path="/hide-me" component={<HideMe>Blah blah blah</HideMe>} />
          <Route exact path="/minimum/:length" render={({ match }) => (
            <MinimumLength length={match.params.length} />
          )} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
