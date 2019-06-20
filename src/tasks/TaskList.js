
import React from 'react';
import queryString from 'query-string';
import moment from 'moment'

const TaskList = ({ location, tasks }) => {
    console.log(location.search);
    const queryObject = queryString.parse(location.search);
    console.log(queryObject);
    return (
        <div className="row">
            <div className="mt-2 w-100">
                <h3>Tasks</h3>
                {   queryObject && 
                    ( queryObject.owner_id || queryObject.asignee_id || queryObject.project_id) && 
                    <h6> <em> Prefilter by owner: {queryObject.owner_id || 'all'};
                        asignee: {queryObject.asignee_id || 'all'}; 
                        project id: {queryObject.project_id || 'all'}  </em> </h6>
                }
                <table className="table table-inverse">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Owner</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Total items: {tasks.length}</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            tasks && Array.isArray(tasks) && tasks.length &&
                            tasks.map( (task) => (
                                <tr>
                                <td>{task.subject}</td>
                                <td>{task.description}</td>
                                <td>{task.status}</td>
                                <td>{task.owner_name}</td>
                                <td>{moment(task.end_date).format('DD-MMM-YYYY')}</td>
                                <td>{moment(task.end_date).fromNow()}</td>
                                </tr>
    
                            ) )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TaskList;
