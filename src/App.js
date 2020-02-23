import React, { useState, Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import search from './pages/search'
import saved from './pages/saved'

function App() {
 
  return (
    <BrowserRouter>
    <div className="App">
    
        <Switch>
            <Route exact path="/" component={search}/>
            <Route path="/saved" component={saved}/>
          </Switch>
     </div>
</BrowserRouter>

  );
}

export default App;
