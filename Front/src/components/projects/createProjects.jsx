import { gql } from 'apollo-boost';
import React from 'react';
import { PageTitle } from '../page-title/page-title';
import { useMutation, useQuery } from '@apollo/react-hooks';

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
    const { loading, error, data } = useQuery(getUsuarios);
    if (loading) {
        return 'Cargando...';
    } else {
        console.log(data);
        return (
            <div className='page-container'>
                <PageTitle title={'Crear proyecto'} />
                <div className='page-content'>
                    <div className='row'>
                        <div className='col-md-6 offset-md-3'>
                            <div className='card'>
                                <form >
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