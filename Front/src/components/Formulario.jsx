import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function Formulario() {

    const [nombre, setNombre] = useState('')
    const [cedula, setCedula] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rol, setRol] = useState('')
    const [estado, setEstado] = useState('')

    const registrar = async(e)=>{
        e.preventDefault()
        const NuevoUsuario = {nombre, cedula, email, password, rol, estado}
        const respuesta = await Axios.post('http://localhost:4000/api', NuevoUsuario)
        //console.log(respuesta)
        const mensaje = respuesta.data.mensaje
        //alert(mensaje)
        Swal.fire({
            icon: 'success',
            title: mensaje
            //showConfirmButton: false,
            //timer: 1500
        })
    }

    return (
        <div className="container col-md-3 mt-4">
            <form onSubmit={registrar}>
                <div className="form-group">               
                    <input type="text" className="form-control" required placeholder="Nombre" onChange={e=>setNombre(e.target.value)} />              
                </div>
                <div className="form-group">              
                    <input type="number" className="form-control" required placeholder="Cedula" onChange={e=>setCedula(e.target.value)}/>
                </div>
                <div className="form-group">              
                    <input type="email" className="form-control" required placeholder="Email" onChange={e=>setEmail(e.target.value)} />
                </div>
                <div className="form-group">              
                    <input type="password" className="form-control" required placeholder="Password" onChange={e=>setPassword(e.target.value)} />
                </div>
                <div className="form-group">              
                    <input type="text" className="form-control" required placeholder="Rol" onChange={e=>setRol(e.target.value)} />
                </div>
                <div className="form-group">              
                    <input type="text" className="form-control" required placeholder="Estado" onChange={e=>setEstado(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
                <button>Guardar</button>
            </form>
        </div>
    )
}
