import { Button } from '@material-ui/core';
import React ,{useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import './Services.css'
import {TitleContext} from '../../App.js'
const Services = (props) => {
    const {key} = useParams()
    const [eventTitle,setEventTitle] = useContext(TitleContext)
    const {img,title,_id} = props.service
    return (
        
            <div className="col-md-3 col-sm-12 event">
                <img src={img} alt=""/>
                <Button onClick = {()=> setEventTitle({title,img})}><Link to={'/register/' + _id}>{title}</Link></Button>
            
            </div>
        
    );
};

export default Services;