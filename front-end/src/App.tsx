import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.scss';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="app">
        <BrowserRouter>
          <Navbar />
          {/* <Switch>
            <Route path="/" component={}/>
          </Switch> */}
        </BrowserRouter>
    </div>
  );
}

export default App;
