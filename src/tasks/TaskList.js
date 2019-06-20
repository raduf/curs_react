import React from 'react';

const TaskList = (props) => {
    return (
        <div className="row">
            <div className="mt-2 w-100">
                <h3>Tasks</h3>
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
                            <th>Total items: </th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td>Subject</td>
                            <td>Description</td>
                            <td>Status</td>
                            <td>Owner</td>
                            <td>Deadline</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TaskList;
