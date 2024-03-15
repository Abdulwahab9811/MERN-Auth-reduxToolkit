import { useState , useEffect } from "react";
import { Link,  useLocation , useNavigate} from 'react-router-dom';
import { Form, Button, Row, Col} from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

import React from 'react'

const Registerscreen = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword,SetConfirmPassword] = useState('');
       

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, { isLoading }] = useRegisterMutation();
    const { userInfo } = useSelector((state) => state.auth);

   useEffect(() => {
    if (userInfo) {
    navigate('/');
    }
   }, [navigate, userInfo]);

    

   const submitHandler = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate('/');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  
    
    
  return (
    <FormContainer>
        <h1>Sign up</h1>

        <Form onSumbit={sumbitHandler}>

        <Form.Group className='my-2' controleId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e)=> setName(e.target.value) }>

                </Form.Control>
            </Form.Group>



            <Form.Group className='my-2' controleId='email'>
                <Form.Label> Email Adresse </Form.Label>
                <Form.Control
                type="email"
                placeholder="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value) }>

                </Form.Control>
            </Form.Group>

            <Form.Group className='my-2' controleId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value) }>

                </Form.Control>
            </Form.Group>

            <Form.Group className='my-2' controleId='confirmPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e)=> SetConfirmPassword(e.target.value) }>

                </Form.Control>
            </Form.Group>

            <Button type = 'Sumbit' variant='primary' className="mt-3">
                Sign Up
            </Button>

            <Row className="py-3">
                <Col>
                Already have a acount? <Link to= '/login'>Login</Link>
                </Col>
            </Row>
        </Form>
    </FormContainer>
  )
}


export default Registerscreen
