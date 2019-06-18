
import React, { Component } from 'react';

const ProjectsFilter = (props) => {

    const handleChange = (e) => {
        console.log('Filtered by: ', e.target.value);
        props.onFilterChange(e.target.value);
    }

    return (
        <fieldset>
            <legend>Search project:</legend>
            <input onChange={handleChange} />
        </fieldset>
    );
}

export default ProjectsFilter;

