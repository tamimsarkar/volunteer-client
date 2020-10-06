import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
import './SideBar.css'
const SideBar = () => {
    return (
        <div className="sidebar">
           <img className="sidebar__logo" src={logo} alt=""/>
            <div className="permalink">
            <Button><Link className="link" to="/admin-panel/volunteer-list">Volunteers List</Link></Button>
            <Button><Link className="link" to="/admin-panel/add-event">Add Event</Link></Button>
            </div>
        </div>
    );
};

export default SideBar;