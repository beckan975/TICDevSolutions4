
import Axios from 'axios'
import Swal from 'sweetalert2'

import React from 'react'
//import { useHistory } from 'react-router'
import '../gestionp/gestion.css'

const Proyectosad = () => {
  
    return (
        <div className="proyectos">
       <h2>LISTADO DE PROYECTOS</h2>   

        <table className="table">
            <thead className="table-head">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Descripcion</th>
                   
                    <th scope="col">Alumnos</th>
                    <th scope="col">Aprobacion</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {
                   
                        <tr>
                            <td>001</td>
                            <td>La influencia del COVID-19 en la economia de paises emergentes</td>
                            <td>Marlon M, Laura C, Edwin R, Santiago C, Juan Pablo </td>
                            <td>Aprobado</td>
                            <td>Activado</td>
                            <td className="acciones">
                                <button className="btn-editar" type="button" >
                                    Aprobar/Desaprobar
                                </button>
                                <button className="btn-eliminar" type="button">
                                    Activar/Desactivar
                                </button>
                            </td>
                        </tr>
                   
                }
            </tbody>
        </table>
    </div>
    )
}
export default Proyectosad;