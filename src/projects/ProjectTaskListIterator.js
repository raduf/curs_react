import React from 'react';
import PropTypes from 'prop-types';


const ProjectTaskListIterator = (props) => {
    console.log('ProjectTaskList rendered...');
    return (
        
        <div className="pt-2">
        {
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

ProjectTaskListIterator.defaultProps = { 
    noTasksMessage: "NO TASKS!"
}

ProjectTaskListIterator.propTypes = { 
    noTasksMessage: PropTypes.string,
    task: PropTypes.shape({ id: PropTypes.number, subject:PropTypes.string}),
}


export default ProjectTaskListIterator

