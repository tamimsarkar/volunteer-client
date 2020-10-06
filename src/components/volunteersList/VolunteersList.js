import React, { useEffect, useState } from 'react';
import "./VolunteersList.css"

import trash from '../../logos/trash-2 9.png'
import { Button } from '@material-ui/core';
const VolunteersList = () => {
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
        
             <div className="volunteer__list">
                <div className="table">
                <div className="list">
                    <p className="list__item first">name</p>
                    <p className="list__item first">Email ID</p>
                    <p className="list__item first">Registration Date</p>
                    <p className="list__item first">Volunteer Service</p>
                    <p className="list__item first">Action</p>
                </div>
                {
                    user.map(info => (
                        <div className="list">
                        <p className="list__item">{info.name}</p>
                        <p className="list__item">{info.email}</p>
                        <p className="list__item">{info.date}</p>
                        <p className="list__item">{info.title}</p>
                        <Button onClick={()=>handleDelete(info._id)}><img className="trash__button" src={trash} alt=""/></Button>
                    </div>
                    ))
                }
                </div>
            </div>
      
    );
};

export default VolunteersList;