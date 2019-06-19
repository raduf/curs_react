
import React, { Component } from 'react';

class ProjectAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            project:{
                name: '',
                code: '',
                description: '',
            },

            formErrors: {
                name: '',
                code: ''
            },
            formValid: false, 
            projectValid: {
                name: false,
                code: false
            }

        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.handleFormInputChange = this.handleFormInputChange.bind(this);
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

    validateField(fieldName, value){
        let fieldValidationErrors = this.state.formErrors

        let nameValid = this.state.projectValid.name
        let codeValid = this.state.projectValid.code

        switch(fieldName){
            case 'name':
                nameValid = value.length >= 5
                fieldValidationErrors.name = nameValid ? '' : 'is too short'
                break
            case 'code':
                codeValid = value.length >= 2
                fieldValidationErrors.code = codeValid ? '' : 'is too short'
                break
            default:
                break
        }

        this.setState( () => ({
            formErrors: fieldValidationErrors,
            projectValid: {
                name: nameValid,
                code: codeValid
            }
        }), this.validateForm)
    }

    validateForm(){
        this.setState({
            formValid: this.state.projectValid.code && this.state.projectValid.name
        })
    }
    
    handleFormInputChange(e){
        console.log('handleFormInputChange', e.target.name, e.target.value)
        const value = e.target.value;
        const name = e.target.name;

        this.setState((prevState) => ({
                project: {
                    ...this.state.project,
                    [name]: value
                }
            }), 
            () => {
                this.validateField(name, value)
            }
        );
    }

    render() {
        return (
            <div className="col-8 pt-2">
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            value={this.state.project.name}
                            onChange={this.handleFormInputChange}
                            name="name" type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="code">Code</label>
                        <input 
                            value={this.state.project.code}
                            onChange={this.handleFormInputChange}
                            name="code" type="text" className="form-control" id="code" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input 
                            value={this.state.project.description}
                            onChange={this.handleFormInputChange}
                            name="description" type="text" className="form-control" id="description" />
                    </div>
                    <button className="btn btn-success">Save</button>
                </form>
            </div>
        )
    }
}

export default ProjectAdd; 
