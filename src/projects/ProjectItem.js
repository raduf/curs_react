import React, { Component } from 'react';
import ProjectTaskList from './ProjectTaskList' 

class ProjectItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayTaskList: false
        }
        this.onSetCurrent = this.onSetCurrent.bind(this);
        this.hideTaskList = this.hideTaskList.bind(this);
    }

    onSetCurrent(e) {
        console.log(this.props);
        this.props.setCurrentProject(this.props.project);
        this.setState( () => ({ displayTaskList: true }) );
    }

    hideTaskList() {
        this.setState( () => ({ displayTaskList: false }) ); 
    }

    render(){
        return (
            <div className="col-8 pt-2">
                <div className="card card-inverse card-outline-default text-white"
                        style={ {backgroundColor: "#555", borderColor: "#555"} }>
                    <h4 className="card-header">
                        {this.props.project.name}
                        <span className="float-right badge badge-default">
                            {this.props.project.code}
                            <button onClick={this.onSetCurrent}
                                type="button" className="btn btn-secondary btn-sm ml-2">
                                Set current</button>    
                        </span>
                    </h4>
                    <div className="card-text pt-2 pb-2 pl-4 pr-4">{this.props.project.description}</div>
                </div>
                {   this.state.displayTaskList &&
                    (this.props.currentProject && this.props.project.id === this.props.currentProject.id) &&
                    
                    ( 
                        <div>
                            {
                                this.props.projectSettings && this.props.projectSettings.showHideButton &&
                                (
                                    <button onClick={this.hideTaskList} className="btn btn-info btn-sm ml-3 mt-1"> Hide </button>
                                )
                            }
                            <ProjectTaskList 
                                tasks={ this.props.currentProject.tasks } 
                                projectSettings={this.props.projectSettings}/>
                        </div>
                    )
                }
            </div>
        );
    }
}

ProjectItem.defaultProps = {
    projectSettings: {
        showHideButton: true
    }
}

export default ProjectItem;