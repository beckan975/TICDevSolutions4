import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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

export const UsuariosHelper = (props) => {
    const { loading, error, data } = useQuery(getUsuarios);
    if (loading) return 'Cargando...';
    if (error) return `Error: ${error.message}`;

    return (
        <div className='usuario-field'>
            <div className='usuario-actions'>
                <div className='form-group'>
                    <select className='form-select' onChange={props.onUserChange}>
                        {
                            data.getUsuarios.map(usuario =>
                                <option key={usuario.id} value={usuario.id}>{usuario.nombre} {usuario.apellido}</option>
                            )
                        }
                    </select>
                </div>

                <button type="button" className="btn btn-primary" onClick={props.onAgregarUsuario}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                    </svg>
                </button>
                <button type="button" className="btn btn-danger" onClick={props.onDeleteUser}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                    </svg>
                </button>
            </div>
        </div >
    )
}