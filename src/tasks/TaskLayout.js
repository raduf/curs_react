import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import TaskList from './TaskList';
import TaskNew from './TaskNew';

const TaskLayout = ({match, ...props}) => {
    return (
        <div className="container">
            <div className="row">
                <h4 className="mt-4 ml-3">Tasks</h4>
            </div>
            <div className="row">
                <div className="col-md-3 mt-2">
                    <NavLink className="btn btn-block btn-outline-info" exact to={`${match.url}`}>All tasks</NavLink>
                    <NavLink className="btn btn-block btn-outline-info" to={`${match.url}/new`}>New task</NavLink>
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
                        <Route path={`${match.url}/new`} component={ TaskNew }/>
                        <Route path={`${match.url}`} component={ TaskList }/>
                    </Switch>

                </div>
            </div>
        </div>
    )
}

export default TaskLayout;
