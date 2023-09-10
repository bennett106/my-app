import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Hello from '/components/Hello';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Navbar title = 'My-App' aboutUs = 'About Us'/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <div className="container">
              <TextForm heading = "Enter the text to analyze."/>
            </div>
          </Route>
          
        </Switch>
      
        
      </Router>
  );
}

export default App;
