import { Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import {TitleContext} from '../../App'
import './Events.css'
const Events = () => {
    const [eventTitle, setEventTitle] = useContext(TitleContext)
    const [activity, setActivity] = useState([])
    const [del,setDel] = useState(false)
    
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
            if(data){
                setDel(true)
            }
        }
            )
    }
    return (
        <div className="container m-auto">
        <div className="row">
            {
                activity.map(active =>(
                    
                    <div className=" col-md-3 event">
                        <img src={active.img} alt=""/>
                        <div className="status">
                            <h5>{active.title}</h5>
                            <p>{active.date}</p>
                            {
                                console.log(active._id)
                            }
                            <Button onClick={()=>handleCencel(active._id)} className="cencel__button">Cencel</Button>
                        </div> 
                    </div>
                    
                )
                    
                )}
        </div>
        </div>
    );
};

export default Events;