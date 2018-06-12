import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Employee extends Component{

    static get propTypes() {
        return {
            employee: PropTypes.object,
            getAllEmployees: PropTypes.func
        }
    }

    constructor(props){
        super(props);
        this.employee = props.employee;
        this.getAllEmployees = props.getAllEmployees;


    }

    render() {
        return <tr>
            <td>{this.employee.eid}</td>
            <td>{this.employee.name}</td>
            <td>{this.employee.email}</td>
            <td>{this.employee.gender}</td>
            <td>{this.employee.position}</td>
            <td>{this.employee.department}</td>
            <td>{this.employee.date_joined}</td>
        </tr>
    }
}