import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import ProjectsFilter from './ProjectsFilter';

class ProjectList extends Component {

    constructor(){
        super();
        this.state = {
            currentProject: null,
            projects: [
                {
                    "id": 1,
                    "code": "ONE",
                    "name": "Project ONE",
                    "description": "This is the description of Project ONE",
                    "owner_id": 10,
                    "owner_name": "James Hansen",
                    "created_date": "07/09/2051",
                    "end_date": "2051-10-19T21:00:00.000Z"
                },
                {
                    "id": 2,
                    "code": "TWO",
                    "name": "Project TWO",
                    "description": "This is the description of Project TWO",
                    "owner_id": 10,
                    "owner_name": "James Hansen",
                    "created_date": "24/10/2051",
                    "end_date": "2051-11-18T21:00:00.000Z"
                },
                {
                    "id": 3,
                    "code": "THREE",
                    "name": "Project THREE",
                    "description": "This is the description of Project THREE",
                    "owner_id": 10,
                    "owner_name": "James Hansen",
                    "created_date": "29/10/2051",
                    "end_date": "2051-11-30T21:00:00.000Z"
                },
                {
                    "id": 4,
                    "code": "FOUR",
                    "name": "Project FOUR",
                    "description": "This is the description of Project FOUR",
                    "owner_id": 11,
                    "owner_name": "Louise Meyer",
                    "created_date": "30/10/2051",
                    "end_date": "2051-12-07T21:00:00.000Z"
                },
                {
                    "id": 5,
                    "code": "FIVE",
                    "name": "Project FIVE",
                    "description": "This is the description of Project FIVE",
                    "owner_id": 11,
                    "owner_name": "Louise Meyer",
                    "created_date": "02/10/2051",
                    "end_date": "2051-11-15T21:00:00.000Z"
                },
                {
                    "id": 6,
                    "code": "SIX",
                    "name": "Project SIX",
                    "description": "This is the description of Project SIX",
                    "owner_id": 14,
                    "owner_name": "Clyde Dorman",
                    "created_date": "09/11/2051",
                    "end_date": "2051-12-22T21:00:00.000Z"
                }
            ]
        }
        this.setCurrentProject = this.setCurrentProject.bind(this);
    }

    setCurrentProject(project) {
        this.setState( {currentProject: project} );
    }

    onFilterChange(searchText){
        console.log('Search Text: ', searchText)

    }

    render() {
        return (
            <div>
                <div className="row justify-content-center"> 
                    <div className="col-4 pt-2">
                        <ProjectsFilter onFilterChange={this.onFilterChange}/>
                    </div>
                    <div className="col-4 pt-2">
                        <h5 className="float-right"> Current project:  {this.state.currentProject && this.state.currentProject.name} </h5>
                    </div>
                </div>
                <div className="row justify-content-center"> 
                    {
                        this.state.projects.map(project => {
                            return (
                                <ProjectItem key={project.id} 
                                    project={project} setCurrentProject={this.setCurrentProject} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;
