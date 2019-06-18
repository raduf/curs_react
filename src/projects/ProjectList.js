import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import ProjectsFilter from './ProjectsFilter';
import db from '../apiserver/db'

class ProjectList extends Component {

    constructor(){
        super();
        this.state = {
            currentProject: null,
            projects: db.projects,
            allProjects: db.projects,
            allTasks: db.tasks
        }
        this.setCurrentProject = this.setCurrentProject.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    setCurrentProject(project) {
        let currentProjectTasks = this.state.allTasks.filter( task => task.project_id === project.id )
        project.tasks = currentProjectTasks

        this.setState( {currentProject: project} );
    }

    onFilterChange(searchText) {
        console.log(this.state);
        let filteredProjects = this.state.allProjects.filter( project => {
            return  project.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    project.description.toLowerCase().includes(searchText.toLowerCase());
        });
        this.setState( () => ({ projects: filteredProjects }))
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center"> 
                    <div className="col-4 pt-2">
                        <ProjectsFilter onFilterChange={this.onFilterChange} />
                    </div>
                    <div className="col-4 pt-2">
                        <h5 className="float-right"> Current project:  {this.state.currentProject && this.state.currentProject.name} </h5>
                    </div>
                </div>
                <div className="row justify-content-center"> 
                    {
                        this.state.projects.map(project => {
                            return (
                                <ProjectItem 
                                    key={project.id} 
                                    project={project} 
                                    setCurrentProject={this.setCurrentProject} 
                                    currentProject={this.state.currentProject}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;
