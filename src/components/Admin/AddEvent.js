import { Button, Input } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AddEvent.css'
const AddEvent = () => {
    const initialFormData = Object.freeze({
        name: "",
        description: "",        
        date: "",        
        title: ""
      });
      const history = useHistory()
      const [formData, updateFormData] = useState(initialFormData);
      const handleChange = (e) => {
        updateFormData({
          ...formData,
    
          [e.target.name]: e.target.value.trim()
        });
      };
      
      const handleSubmit = (e) => {
        e.preventDefault()
        const addEvent = {...formData}
        fetch('https://tranquil-badlands-94867.herokuapp.com/events',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(addEvent)

        })
        .then(res => res.json())
        .then(data => {
            alert("Your Data stored Successfully")
            history.push('/')
    })
        

      }
    return (
        <div className="add__vent">
            <form  className="register__form">
                <h4 className='register__header'>Upload your volunteer service</h4>
                <Input name="name" onChange={handleChange} className="form__input" type="text"  required placeholder='Name'/>
                <Input name="date" onChange={handleChange} className="form__input" type="date"  required placeholder='Date'/>
                <Input name="description" onChange={handleChange}  className="form__input" required type="text" placeholder='Description'/>
                <Input name="title" onChange={handleChange}  required className="form__input" type="text" placeholder='Volunteer event'/>
                <Button className="form__submit__button" type="submit" onClick={handleSubmit} >Upload</Button>
            </form>
        </div>
    );
};

export default AddEvent;