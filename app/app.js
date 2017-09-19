import React from 'react';
import ReactDom from 'react-dom'
import Router from 'react-router'
import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import Routes from './config/routes';

ReactDOM.render(<Routes />, document.getElementById("app"));

