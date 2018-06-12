import React, {Component} from 'react';
import {Link} from 'react-router';

export default class NavBar extends Component{
    
    render(){
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="">HR System</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><a href=""><Link to={'/'}>Home</Link></a></li>
                    <li><Link to={'/employee'}>Employee</Link></li>
                    <li><Link to={'/add-employee'}>Add Employee</Link></li>
                    <li><Link to={'/assign-employee'}>Assign Employee</Link></li>
                </ul>
            </div>
        </nav>
    }
}