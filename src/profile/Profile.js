import React from 'react';

const Profile = (props) => {
    return (
        <div className="card text-center">
            <div className="card-header">
                Profile
            </div>
            <div className="card-body">
                <h4 className="card-title">Name: {props.profile.name} </h4>
                <p className="card-text">About me: {props.profile.bio} </p>
                <a className="btn btn-primary text-white">Dashboard</a>
                <a className="btn btn-primary text-white ml-2">All Projects</a>
            </div>
            <div className="card-footer text-muted">
                Working on 7 tasks
            </div>
        </div>
    )
}

export default Profile;