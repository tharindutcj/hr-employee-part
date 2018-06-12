import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route,browserHistory} from 'react-router';
import EmployeeHandler from './Employee/EmployeeHandler';
import AddEmployee from './Employee/Controllers/AddEmployee';
import AssignEmployee from './Employee/AssignEmployee';
import Error from './Error';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}/>
        <Route path='/employee' component={EmployeeHandler}/>
        <Route path='/add-employee' component={AddEmployee}/>
        <Route path='/assign-employee' component={AssignEmployee}/>
        <Route path="*" component={Error}/>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
