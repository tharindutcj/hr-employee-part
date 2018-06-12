import React,{Component} from 'react';
import axios from 'axios';
import NavBar from '../../Navigation/NavigationBar';

export default class addEmployee extends  Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            email : '',
            gender : '',
            position : '',
            department : '',
            date_joined : '',
        }

        this.setChanges = this.setChanges.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.getAllDepartments();
    }

    setChanges(e){
        this.setState({[e.target.name]:e.target.value});
    }

    addEmployee(){
        axios.post('http://localhost:3001/employee/add',{
            name:this.state.name,
            email:this.state.email,
            gender:this.state.gender,
            position:this.state.position,
            department:this.state.department,
            date_joined:this.state.date_joined
        }).then((res) =>{
            alert(res.data.data);
        }).catch((err)=>{
            alert(err);
        });
    }

    getAllDepartments(){
        // axios.get('http://localhost:8081/book/author').then((res) =>{
        //     console.log(res.data.data);
        //     this.setState({
        //         authors : res.data.data
        //     })
        // });
    }

    render(){
        return(
            <div>
            <NavBar/>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-6 col-md-offset-3'}>
                            <div className="panel panel-default">
                                <div className="panel-heading">Add New Employee</div>
                                <div className="panel-body">

                                    <div class="form-group">
                                        <label>Name:</label>
                                        <input type="text" className="form-control" name={'name'} onChange={this.setChanges} />
                                    </div>

                                    <div class="form-group">
                                        <label>Email:</label>
                                        <input type="email" className="form-control" name={'email'} onChange={this.setChanges} />
                                    </div>

                                    <div class="form-group">
                                        <label>Gender:</label>
                                        <select className={'form-control'} name={'gender'} onChange={this.setChanges} >
                                            <option value={'Male'}>Male</option>
                                            <option value={'Female'}>Female</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label>Position:</label>
                                        <input type="text" className="form-control" name={'position'} onChange={this.setChanges} />
                                    </div>


                                    <div class="form-group">
                                        <label>Department:</label>
                                        <input type="text" className="form-control" name={'department'} onChange={this.setChanges} />
                                    </div>

                                    <div class="form-group">
                                        <label>Joined Date:</label>
                                        <input type="date" className="form-control" name={'date_joined'} onChange={this.setChanges} />
                                    </div>

                                    <button type={'button'} className="btn btn-success" onClick={this.addEmployee}>Add Employee</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// class AuthorNameDropdown extends Component{
//
//     static get propTypes() {
//         return {
//             authors: PropTypes.array
//         }
//     }
//     constructor(props){
//         super(props);
//     }
//
//     componentWillReceiveProps(props) {
//         this.setState(props)
//     }
//
//     render(){
//         console.log(this.props);
//
//         this.authors = this.props.authors;
//         return <select>
//             {
//                 this.authors.map((item, i) =>{
//                     return <option key={i}>{item.name}</option>
//                 })
//             }
//             </select>
//     }
// }