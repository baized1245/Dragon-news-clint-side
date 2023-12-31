import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvidert';

const Register = () => {
  const {creatUser} = useContext(AuthContext);
  const [accept, setAccecpt] = useState(false);
   
  const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    creatUser(email, password)
    .then(result =>{
      const creatUser = result.user;
      console.log(creatUser);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  const handleAccepted = event =>{
    setAccecpt(event.target.checked)
  }

    return (
        <Container className='w-25 mx-auto'>
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name='name' placeholder="Enter your name" required />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Photo url</Form.Label>
    <Form.Control type="text" name='photo' placeholder="Enter your photo url" required />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' placeholder="Enter email" required />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' placeholder="Password" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check 
     onClick={handleAccepted}
    type="checkbox"
     name='accept' 
     label={<>Accept <Link to='/termsandconditions'>Terms and conditions</Link></>} />
  </Form.Group>
  <Button variant="primary" disabled={!accept} type="submit">
    Register
  </Button>
  <br />
  <Form.Text className="text-secondary">
      Already have an acount? <Link to='/login'>Login</Link>   
    </Form.Text>
  <Form.Text className="text-success">
     
    </Form.Text>
  <Form.Text className="text-danger">
     
    </Form.Text>
</Form>
    </Container>
    );
};

export default Register;