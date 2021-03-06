import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./css/Login.css";
import axios from "axios";

let Signup = (props) => {
  console.warn('signup',props)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }


  function handleSubmit(event) {
      
    event.preventDefault();

    const url =  'https://Apibyashu.herokuapp.com/api/register'
    const registerData = { name: name,email:email,password:password }
    axios.post(url, registerData)
        .then(response => console.warn('check register',response))
        .catch(error => {
           
            console.error('There was an error!', error);
        });
 
 


    
  }

 return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
      <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
      </Form>
    </div>
  );
}


export default Signup