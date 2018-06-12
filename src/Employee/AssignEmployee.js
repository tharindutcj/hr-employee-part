import React,{Component} from 'react';
import Employees from './Modules/Employees';
import axios from 'axios';
import NavBar from '../Navigation/NavigationBar';

export default class BookHandler extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            department:'',
            eid:''
        }
        this.getAllEmployee();
        this.assignEmployee = this.assignEmployee.bind(this);
        this.setChanges = this.setChanges.bind(this);
    }

    getAllEmployee(){
        axios.get('http://localhost:3001/employee').then(res =>{
            console.log(res.data.data);
            this.setState({
                employees: res.data.data || res.data
            });
        })
    }

    setChanges(e){
        this.setState({[e.target.name]:e.target.value});
    }

    assignEmployee(){
        axios.put('http://localhost:3001/employee/assign',{
            eid:this.state.eid,
            department:this.state.department
        }).then((result) =>{
            console.log(result);
            alert(result.data.data);
        }).catch((err) =>{
            alert(err.data);
        });
    }

    render() {
        return <div>
            <NavBar/>
            <div className={'col-md-4 col-md-offset-4'}>
                <div className="panel panel-default">
                    <div className="panel-heading">Employee Assign</div>
                    <div className="panel-body">

                        <div className="form-group">
                            <label>Employee:</label>
                            <select className={'form-control'} name={'eid'} onChange={this.setChanges} >
                                {
                                    this.state.employees.map((item,i)=>{
                                        return <option key={i} value={item.eid}>{item.eid + " | " + item.name}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Department:</label>
                            <input type="text" className="form-control" name={'department'} onChange={this.setChanges} />
                        </div>

                        <button type={'button'} className="btn btn-success" onClick={this.assignEmployee}>Assign Employee</button>

                    </div>
                </div>
            </div>
        </div>;
    }
}