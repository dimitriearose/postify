import React,{useContext} from 'react';
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom'
import './App.scss';
import Feed from './components/Feed/Feed';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Navbar from './components/Navbar/Navbar';
import UserState from './context/userContext'
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {

  const {userInfo} = useContext(UserState)


  return (
    <div className="app">

        <BrowserRouter>
 
          <Switch>
          
            <Route path='/signup'>
              <Signup />
            </Route>

        { userInfo.userInfo?.name  ? <Route path="/home">
            <Navbar />
              <div className="app__body">
                <Sidebar/>
                <Feed/>
              </div>
            </Route> : null}

            <Route path='/' exact >
              <Login />
            </Route>

        <Redirect to='/'/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
