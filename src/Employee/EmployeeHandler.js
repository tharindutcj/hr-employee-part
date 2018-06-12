import React,{Component} from 'react';
import Employees from './Modules/Employees';
import axios from 'axios';
import NavBar from '../Navigation/NavigationBar';

export default class BookHandler extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        }
        this.getAllEmployee();
    }

    getAllEmployee(){
        axios.get('http://localhost:3001/employee').then(res =>{
            console.log(res.data.data);
            this.setState({
                employees: res.data.data || res.data
            });
        })
    }

    render() {
        return <div>
            <NavBar/>
            <div className={'col-md-10 col-md-offset-1'}>
                <div className="panel panel-default">
                    <div className="panel-heading">Employee Details</div>
                    <div className="panel-body">
                        <Employees employees={this.state.employees} />
                    </div>
                </div>
            </div>
        </div>;
    }
}