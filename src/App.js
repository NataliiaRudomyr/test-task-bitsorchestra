import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import AddEdit from './components/addEdit/AddEdit';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/add-edit" component={AddEdit}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
