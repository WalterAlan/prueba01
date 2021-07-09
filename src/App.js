import React from 'react' 

import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import Navigation from './components/Navigation';
import Users from './components/Users';
import Timeline from './components/Users';


function App() {
  return (
    <Router>
     

    <Navigation />
    <Route path="/" exact component={Timeline} />
    <Route path="/users" component={Users} />


    </Router>
    
  );
}

export default App;
