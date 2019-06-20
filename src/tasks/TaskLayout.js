import React from 'react';
import { NavLink } from 'react-router-dom';

const TaskLayout = (props) => {
    return (
        <div className="container">
            <div className="row">
                <h4 className="mt-4 ml-3">Tasks</h4>
            </div>
            <div className="row">
                <div className="col-md-3 mt-2">
                    <button className="btn btn-block btn-outline-info">New task</button>
                    <button className="btn btn-block btn-outline-info">All tasks</button>
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
                    
                </div>
            </div>
        </div>
    )
}

export default TaskLayout;
