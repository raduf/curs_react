import React, { Component } from 'react';

class ProjectItem extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
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
                        </span>
                    </h4>
                    <div className="card-text pt-2 pb-2 pl-4 pr-4">{this.props.project.description}</div>
                </div>
            </div>
        );
    }
}

export default ProjectItem;