import React, { Component } from 'react';

class TaskItem extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="row justify-content-center">
            <div className="card" style={ {width: "20rem"} }>
                <div className="card-body">
                    <h4 className="card-title">Task ONE</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Status: Working</h6>
                    <p className="card-text">Task description</p>
                    <button className="btn btn-sm btn-info">Close task</button>
                    <button className="btn btn-sm btn-info ml-3">Close task (fn)</button>
                </div>
            </div>
        </div>
        )
    }
}

export default TaskItem;