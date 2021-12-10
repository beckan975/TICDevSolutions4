import { gql } from 'apollo-boost';
import React, { useState, useEffect } from 'react';
import { PageTitle } from '../page-title/page-title';
import { useMutation, useQuery } from '@apollo/react-hooks';
import Swal from 'sweetalert2';
import { UsuariosHelper } from '../shared/UsuariosHelper';

const crateProyect = gql`
    mutation createProyecto($input: ProyectoInput!) {
        createProyecto(input: $input) {
            id
        }
    }
`;

const getUsuarios = gql`
    {
        getUsuarios{
            id,
            nombre,
            apellido,
            rol{
                nombre
            }
        }
    }
`;


export const CreateProjects = () => {

    const [count, setCount] = useState(1);
    const [usuarios, setUsuarios] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements);
    }

    const agregarUsuario = () => {
        let tempUsers = usuarios;
        tempUsers.push(count);
        setCount(count + 1);
        setUsuarios(tempUsers);
    }

    const borrarUsuario = (idUsuario) => {
        console.log(idUsuario);
        console.log(usuarios);
        let tempUsers = usuarios;
        tempUsers.splice(idUsuario, 1);
        setUsuarios(tempUsers);
    }

    useEffect(() => {

    }, [usuarios]);

    const handleUserChange = (e) => {
        console.log(e.target.value);
    }

    const { loading, error, data } = useQuery(getUsuarios);
    if (loading) {
        return 'Cargando...';
    } else if (error) {
        Swal.fire('Error', 'Hubo un error al cargar los usuarios', 'error');
        return 'Error';
    }
    else {
        return (
            <div className='page-container'>
                <PageTitle title={'Crear proyecto'} />
                <div className='page-content'>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>
                            <div className='card'>
                                <form onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <label className='form-label' htmlFor='proyectLeader'>Lider del proyecto</label>
                                        <select name="proyectLeader" id="proyectLeader" className='form-select'>
                                            {
                                                data.getUsuarios.map(usuario =>
                                                    <option key={usuario.id}>{usuario.nombre} {usuario.apellido} {usuario.rol.nombre}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className='form-label' htmlFor="projectName">Nombre del proyecto</label>
                                        <input className='form-control' type="text" name="projectName" id="projectName" placeholder='ingrese el nombre del proyecto' />
                                    </div>

                                    <div className="form-group">
                                        <label className='form-label' htmlFor="projectStatus">Estado del proyecto</label>
                                        <input type="text" className='form-control' />
                                    </div>

                                    <div className='usuarios-proyecto'>
                                        <label className='form-label' htmlFor="projectStatus">Usuarios por proyecto:</label>

                                        <UsuariosHelper onUserChange={handleUserChange} onAgregarUsuario={agregarUsuario} onDeleteUser={() => borrarUsuario(0)} />
                                        {
                                            usuarios.map((index, usuario) =>
                                                <UsuariosHelper
                                                    key={index}
                                                    onUserChange={handleUserChange}
                                                    onAgregarUsuario={agregarUsuario}
                                                    onDeleteUser={() => borrarUsuario(index)}
                                                />)
                                        }

                                    </div>
                                    <button className='btn btn-primary'>Crear proyecto</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}