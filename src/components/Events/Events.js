import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logos/Group 1329.png'
import './Events.css'
const Events = () => {
    const [del,setDel] = useState(false)
    const [activity, setActivity] = useState([])
    
    useEffect(() => {
        fetch('https://tranquil-badlands-94867.herokuapp.com/registers')
        .then(res => res.json())
        .then(data => setActivity(data))
        
    }, [del])
    const handleCencel = (_id) => {
        fetch(`https://tranquil-badlands-94867.herokuapp.com/delete/${_id}`,{
            method : 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            setDel(true)
        }
            )
    }
    return (
        <div className="container m-auto">
            <Link to="/"><img className="event__logo" src={logo} alt=""/></Link>
        <div className="row">
            {
                activity.map(active =>(
                    
                    <div className=" col-md-3 event">
                        <img src={active.img} alt=""/>
                        <div className="status">
                            <h5>{active.title}</h5>
                            <p>{active.date}</p>
                            
                            <Button  onClick={()=>handleCencel(active._id)} className="cencel__button">Cencel</Button>
                        </div> 
                    </div>
                    
                )
                    
                )}
        </div>
        </div>
    );
};

export default Events;