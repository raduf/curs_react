import React from 'react';

const TaskEdit = ({match}) => {
    return (
        <div className="card card-inverse">
            <div className="card-block p-3">
                <h3 className="card-title">Edit Task</h3>
                <h6 class="card-subtitle mb-2 text-muted">ID: {match.params.id}</h6>
                <p className="card-text">Acest card va contine un editor pentru editarea de task-uri noi</p>
                <a className="btn btn-outline-secondary">Salveaza</a>
            </div>
        </div>
    )
}

export default TaskEdit;
