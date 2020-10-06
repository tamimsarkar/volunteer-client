import React from 'react'
import './Admin.css'
import SideBar from './SideBar';
import AddEvent from './AddEvent';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import VolunteersList from '../volunteersList/VolunteersList';
const Admin = () => {
    
    return (
        <div className="admin">
            <h2>Admin Panel</h2>
            
              <VolunteersList />
              
              <AddEvent />
        </div>
    );
};

export default Admin;