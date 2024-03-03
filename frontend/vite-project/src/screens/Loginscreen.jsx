import { useState,useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { useLoginMutation} from '../slices/usersApiSlice'
import { setCredentials } from "../slices/authSlices";

import React from 'react'

const Loginscreen = () => {

    const [email, setEmail] = useState('');
    const [password,SetPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, {isLoading}] = useLoginMutation();

    const {userInfo} = useSelector((state) => state.auth);

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    },[navigate,userInfo])

    const sumbitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({email,password}).unwrap();
            dispatch(setCredentials({...res}))
            navigate('/')
            
        } catch (err) {
            console.log(err?.data.message ||err.error);
            
        }

    }

    
  return (
    <FormContainer>
        <h1>Sign in</h1>
        <Form onSumbit={sumbitHandler}>
            <Form.Group className='my-2' controleId='email'>
                <Form.Label>Email Adresse</Form.Label>
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
                onChange={(e)=> SetPassword(e.target.value) }>

                </Form.Control>
            </Form.Group>

            <Button type = 'Sumbit' variant='primary' className="mt-3">
                Sign in
            </Button>

            <Row className="py-3">
                <Col>
                New Constumer? <Link to= '/register'>Register</Link>
                </Col>
            </Row>
        </Form>
    </FormContainer>
  )
}


export default Loginscreen
