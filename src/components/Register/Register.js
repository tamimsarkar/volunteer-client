import React, { useContext, useEffect, useState } from 'react';
import logo from '../../logos/Group 1329.png'
import './Register.css'
import {TitleContext, UserContext} from '../../App.js'
import { Button, Input } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
const Register = () => {
    const initialFormData = Object.freeze({
        name: "",
        description: "",
        service: "",
        date: "",
        email: "",
      });
      const history = useHistory()
      const [eventTitle,setEventTitle] = useContext(TitleContext)
      const [loggedInUser,setLoggedInUser] = useContext(UserContext)
      const [formData, updateFormData] = useState(initialFormData);
      const handleChange = (e) => {
        updateFormData({
          ...formData,
    
          [e.target.name]: e.target.value.trim()
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault()
        const newRegister = {...formData,...eventTitle,...loggedInUser}
        fetch('https://tranquil-badlands-94867.herokuapp.com/registers',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(newRegister)

        })
        .then(res => res.json())
        .then(data => {
            alert("Your Data stored Successfully")
            history.push('/my-events')
    })
        

      };
    return (
        <div className="register">
            <Link to="/"><img className="register__logo" src={logo} alt=""/></Link>
            
            <form action="" className="register__form">
                <h4 className='register__header'>Register as a volunteer</h4>
                <Input name="name" onChange={handleChange} defaultValue={loggedInUser.name}  className="form__input" className="form__input" required type="text" placeholder='Full Name'/>
                <Input name="email" onChange={handleChange} defaultValue={loggedInUser.email} className="form__input" type="text" required placeholder='Email Address'/>
                <Input name="date" onChange={handleChange} className="form__input" type="date"  required placeholder='Date'/>
                <Input name="description" onChange={handleChange}  className="form__input" required type="text" placeholder='Description'/>
                <Input name="service" onChange={handleChange} defaultValue={eventTitle.title} required className="form__input" type="text" placeholder='service'/>
                <Button className="form__submit__button" type="submit" onClick={handleSubmit} >Register</Button>
            </form>
        </div>
    );
};

export default Register;