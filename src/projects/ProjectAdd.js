
import React, { Component } from 'react';

class ProjectAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            project:{
                name: '',
                code: '',
                description: ''
            }
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        const elements = e.target.elements;
        console.log(elements.name.value);
        this.setState(() => ({
            project:{
                    name: elements.name.value,
                    code: elements.code.value,
                    description: elements.description.value
                }
            }),
            () => { 
                console.log('Project saved', this.state);
                this.props.handleProjectSave(this.state.project);
            }
        );
    }
    
    

    render() {
        return (
            <div className="col-8 pt-2">
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input name="name" type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input name="code" type="text" className="form-control" id="code" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input name="description" type="text" className="form-control" id="description" />
                    </div>
                    <button className="btn btn-success">Save</button>
                </form>
            </div>
        )
    }
}

export default ProjectAdd; 
