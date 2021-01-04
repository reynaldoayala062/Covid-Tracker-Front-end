import logo from './logo.svg';
import './App.css';

import { Switch, Route, withRouter, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1> WELCOME TO COVID TRACKER </h1>
    </div>
  );
}

export default withRouter(App);
