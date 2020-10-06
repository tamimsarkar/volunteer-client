import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch('https://tranquil-badlands-94867.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setServices(data))
        
    }, [])
    return (
        <div className="home">
            <Header />
                <div className="container event__container">
            <div className="row">
                {
                    services.map(service => ( <Services key={service._id} service={service}></Services>))
                }
           
            </div>
            </div>
        </div>    
    );
};

export default Home;