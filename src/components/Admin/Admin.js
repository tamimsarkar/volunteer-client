import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import trash from '../../logos/trash-2 9.png'
import logo from '../../logos/Group 1329.png'
import './Admin.css'
import { Link } from 'react-router-dom';
const Admin = () => {
    const [user, setUser] = useState([])
    const [deleted,setDeleted] = useState(false)
    useEffect(() => {
        fetch('https://tranquil-badlands-94867.herokuapp.com/registers')
        .then(res => res.json())
        .then(data =>setUser(data))
        
    }, [deleted])

    const handleDelete = (id) => {
        
        fetch(`https://tranquil-badlands-94867.herokuapp.com/delete/${id}`,{
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
               setDeleted(true)
            }
        })
    }
    return (
        <div className="admin">
            <div className="panel">
                <Link to="/"><img className="logo" src={logo} alt=""/></Link>
                <Button>Volunteers List</Button>
                <Button>Add Event</Button>
            </div>
            <div className="volunteer__list">
                <div className="list">
                    <p>name</p>
                    <p>Email ID</p>
                    <p>Registration Date</p>
                    <p>Volunteer Service</p>
                    <p>Action</p>
                </div>
                {
                    user.map(info => (
                        <div className="list">
                        <p>{info.name}</p>
                        <p>{info.email}</p>
                        <p>{info.date}</p>
                        <p>{info.title}</p>
                        <Button onClick={()=>handleDelete(info._id)}><img className="trash__button" src={trash} alt=""/></Button>
                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Admin;