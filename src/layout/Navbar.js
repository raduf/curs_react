import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary text-white  justify-content-between">
        <a className="navbar-brand">{props.title}</a>
        
        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link"></a>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/dashboard'>Dashboard</NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                    className="nav-link" 
                    to='/' exact
                    activeClassName='active'
                    >Projects</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to='/profile'>Profile</NavLink>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled">{props.name}</a>
            </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Simple PM'
}

export default Navbar;