import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="header">
            <nav >
                  <img className="logo" src={logo} alt=""/>
                
                <div className="menu">
                    <Link className="page" to='/home'>Home</Link>
                    <Link className="page" to='/donation'>Donation</Link>
                    <Link className="page" to='/events'>Events</Link>
                    <Link className="page" to='/blog'>Blog</Link>
                    <Link className="page" to='/register-for-admin'>Register</Link>
                    <Link className="page" to='/admin-panel'>Admin</Link>
                    {loggedInUser ? <small>hello {loggedInUser.name}</small> : <small>Hello</small>}
                    
                </div>
            </nav>
            <h1 style={{textAlign: 'center',marginTop: '20px',fontSize: '26px'}}>I GROW BY HELPING PEOPLE IN NEED.</h1>
            <div className="header__search">
               
                <input type="text" placeholder="Search here..."/>
                <Button>Search</Button>
            </div>
        </div>
    );
};

export default Header;