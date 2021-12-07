import React from 'react'
//import { useHistory } from 'react-router'
import '../login/login.css'


const Registro = () => {
  
    return (
        <div className="loginComponent">
            <div className="login">
				<form >
					<h1>Crear Nueva Cuenta</h1>
				
					<div className="field">
						<label htmlFor="nombre">Nombre</label>
						<input type="text" id="nombre" name="nombre" placeholder="Nombre" ></input>
					</div>

					<div className="field">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" placeholder="Email" ></input>
					</div>

					<div className="field">
						<label htmlFor="password">Contraseña</label>
						<input type="password" id="password" name="password" placeholder="Contraseña" ></input>
					</div>

					<div className="field">
						<label htmlFor="confirmar">
							Confirmar <br/>
							Contraseña
						</label>
						<input type="password" id="confirmar" name="confirmar" placeholder="Confirmar contraseña" ></input>
					</div>

					<div className="submit-btn">
						<input  type="submit" value="Registrarme" />
					</div>
				</form>        
            </div>
        </div>
    )
}
export default Registro;