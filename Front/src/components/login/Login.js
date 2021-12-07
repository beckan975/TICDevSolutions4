import React from 'react'
//import { useHistory } from 'react-router'
import './login.css'


const Login = () => {
  
    return (
        <div className="loginComponent">
            <div className="login">
				<form >
					<h1>Iniciar Sesión</h1>
					
					<div className="email field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" placeholder="Email" ></input>
					</div>
					<div className="password field">
						<label htmlFor="password">Contraseña</label>
						<input type="password" id="password" name="password" placeholder="Contraseña" ></input>
					</div>
					<div className="submit-btn">
						<input type="submit" value="Iniciar Sesión" />
					</div>
				</form>
				
			</div>
        </div>
    )
}
export default Login;