import React, { Component } from 'react';

class ProjectsFilter extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        //console.log(e.target.value)
        this.props.onFilterChange(e.target.value)
    }

    render(){
        return (
            <fieldset>
                <legend>Search Project: </legend>
                <input onChange={this.handleChange} type="text"/>
            </fieldset>
        );
    }
}

export default ProjectsFilter;