
import Axios from 'axios'
import Swal from 'sweetalert2'

import React from 'react'
//import { useHistory } from 'react-router'
import '../gestionp/gestion.css'

const Proyectos = () => {
  
    return (
        <div className="proyectos">
       

        <table className="table">
            <thead className="table-head">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Descripcion</th>
                   
                    <th scope="col">Autores</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {
                   
                        <tr>
                            <td>001</td>
                            <td>La influencia del covid en la economia</td>
                            <td>MM, LC, ER</td>
                            <td>Aprobado</td>
                            <td className="acciones">
                                <button className="btn btn-editar" type="button" >
                                    Editar
                                </button>

                                <button className="btn btn-eliminar" type="button">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                   
                }
            </tbody>
        </table>
    </div>
    )
}
export default Proyectos;