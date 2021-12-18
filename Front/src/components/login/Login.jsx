import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Form } from 'react-bootstrap';
//import { useHistory } from 'react-router'
import './login.css';


const Login = () => {
	return (
		<Card className='login'>
			<Card.Body>
				<Card.Title >
					<h1>Login</h1>
				</Card.Title>
				<Form>
					<Form.Group controlId="formBasicEmail" className='field'>
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword" className='field'>
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Button className=''>Iniciar sesion</Button>
				</Form>
				<Link to={'/registro'}>
					crear cuenta
				</Link>
			</Card.Body>
		</Card >

	)
}
export default Login;