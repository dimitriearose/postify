import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.scss';
import Feed from './components/Feed/Feed';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className="app">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/">
              <div className="app__body">
                <Sidebar/>
                <Feed/>
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
