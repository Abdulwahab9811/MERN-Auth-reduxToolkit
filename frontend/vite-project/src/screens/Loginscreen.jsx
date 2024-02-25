import { useState } from "react";
import { Link, } from 'react-router-dom';
import { Form, Button, Row, Col} from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

import React from 'react'

const Loginscreen = () => {

    const [email, setEmail] = useState('');
    const [password,SetPassword] = useState('');

    const sumbitHandler = async (e) => {
        e.preventDefault();
        console.log('sumbit');

    }
  return (
    <FormContainer>
        <h1>Sign in</h1>
        <Form onSumbit={sumbitHandler}>
            <Form.Group className='my-2' controleId='email'>
                <Form.Label className="Email Adresse"></Form.Label>
                <Form.Control
                type="email"
                placeholder="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value) }>

                </Form.Control>
            </Form.Group>

            <Form.Group className='my-2' controleId='password'>
                <Form.Label className="Password"></Form.Label>
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
