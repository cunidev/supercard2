import React from 'react';
import './styles/App.css';
import CardManager from './components/CardManager';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScanCard from './components/ScanCard';
import EditCard from './components/EditCard';
import Supercard from './components/Supercard';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={CardManager} />
          <Route path="/scan" component={ScanCard} />
          <Route path="/edit/:id" component={EditCard} />
          <Route path="/supercard" component={Supercard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;