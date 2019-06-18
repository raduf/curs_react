import React, { Component } from 'react';

class TaskItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task:{
                "id": 101,
                "subject": "Task ONE",
                "description": "This is the description of Task ONE",
                "status": "Working",
            }
            
        }
        this.closeTaskFn = this.closeTaskFn.bind(this)
        this.closeTaskObjFn = this.closeTaskObjFn.bind(this)
    }

    closeTaskObjFn(){
        console.log("message from child component")

        let rejectedTask = {
            "id": 101,
            "subject": "Task ONE",
            "description": "This is the description of Task ONE",
            "status": "Rejected",
        }

        this.setState((prevState) => {
            console.log('PrevState', prevState.task)
            return {task: rejectedTask}
        })

        this.setState((prevState, props)=> {
            console.log('PrevState', prevState.task)
            if(prevState.task.status !== 'Rejected'){
                let closedTask = Object.assign({}, this.state.task)
                closedTask.status = 'Closed'
                return {
                    task: closedTask
                }
            }
        })

        // if(this.state.task.status !== 'Rejected'){
        //     let closedTask = Object.assign({}, this.state.task)
        //     closedTask.status = 'Closed'
        //     this.setState(task:closedTask)
        // }
    }

    closeTaskFn(){
        console.log("message from child component")

        let rejectedTask = {
            "id": 101,
            "subject": "Task ONE",
            "description": "This is the description of Task ONE",
            "status": "Rejected",
        }

        return {task: rejectedTask}

        if(this.state.task.status !== 'Rejected'){
           let closedTask = Object.assign({}, this.state.task)
           closedTask.status = 'Closed'
           this.setState({task:closedTask})
        }
    }

    render(){
        return (
            <div className="row justify-content-center">
            <div className="card" style={ {width: "20rem"} }>
                <div className="card-body">
                    <h4 className="card-title">{this.state.task.subject}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Status: {this.state.task.status}</h6>
                    <p className="card-text">{this.state.task.description}</p>
                    <button
                        onClick={this.closeTaskObjFn} 
                        className="btn btn-sm btn-info">Close task</button>
                    <button 
                        onClick={this.closeTaskFn} 
                        className="btn btn-sm btn-info ml-3">Close task (fn)</button>
                </div>
            </div>
        </div>
        )
    }
}

export default TaskItem;