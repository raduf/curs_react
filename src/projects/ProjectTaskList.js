import React from 'react';

const ProjectTaskList = (props) => {
    return (
        <div className="pt-2">

            {
                !props.tasks.length ?   
                <div class="alert alert-secondary" role="alert">
                    No tasks for this project!
                </div>
                :
                props.tasks.map(task => {
                    return (
                        <div key={task.id} className="card">
                            <div className="card-text pt-2 pb-2 pl-4 pr-4">
                                <em><strong>{task.subject}</strong>: {task.description} </em>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProjectTaskList

