import React from 'react';

import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import TaskList from './TaskList';
import TaskNew from './TaskNew';
import TaskEdit from './TaskEdit';
import axios from 'axios'

class TaskLayout extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            match: props.match,
            tasks: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/tasks')
        .then( (resp) => this.setState( () => ({ tasks:resp.data }) ) )
        .catch( (error) => console.log(error) )
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <h4 className="mt-4 ml-3">Tasks</h4>
                </div>
                <div className="row">
                    <div className="col-md-3 mt-2">
                        <NavLink exact to={`${this.state.match.url}`}  activeClassName="active"
                            className="btn btn-block btn-outline-info">All tasks</NavLink>
                        <NavLink exact to={`${this.state.match.url}/new`}  activeClassName="active"
                            className="btn btn-block btn-outline-info">New task</NavLink>
                        <hr />
                        <h5>Owner / Asignee:</h5>
                        <button className="btn btn-block btn-outline-info">FOR Me</button>
                        <button className="btn btn-block btn-outline-info">BY Me</button>
                        <hr />
                        <h5>Status:</h5>
                        <button className="btn btn-block btn-outline-info">New</button>
                        <button className="btn btn-block btn-outline-info">Working</button>
                        <button className="btn btn-block btn-outline-info">Closed</button>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact 
                                path={`${this.state.match.url}`} 
                                render={ () => <TaskList {...this.props} tasks={this.state.tasks}/> }/>
                            <Route path={`${this.state.match.url}/new`} component={TaskNew}/>
                            <Route path={`${this.state.match.url}/edit/:id`} component={TaskEdit}/>
                            <Redirect from={`${this.state.match.url}/edit`} to={`${this.state.match.url}/new`} />
                        </Switch>
                    </div>
                </div>
            </div>
        )

    }
}

export default TaskLayout;