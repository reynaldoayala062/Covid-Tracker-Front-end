import logo from '../logo.svg';
import '../App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Login from '../auth/Login'
import Signup from '../auth/Signup'
import Map from  '../components/Map'
import UserProfile  from '../components/UserProfile'


import { Switch, Route, withRouter, Redirect, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <h1> WELCOME TO COVID TRACKER </h1>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>

          <Route path='/login'>
            <Login/>
          </Route>

          <Route path='/signup'>
            <Signup/>
          </Route>

          <Route path='/map'>
            <Map/>
          </Route>

          <Route path='/user-profile'>
            <UserProfile/>
          </Route>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
