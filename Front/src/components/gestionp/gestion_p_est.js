import Axios from 'axios'
import Swal from 'sweetalert2'

import React from 'react'
//import { useHistory } from 'react-router'
import '../gestionp/gestion.css'

const Proyectosest = () => {
  
    return (
        <div className="proyectos">
        <h2>LISTADO DE PROYECTOS</h2>       

        <table className="table">
            <thead className="table-head">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Descripcion</th>
                   
                    <th scope="col">Inscripción</th>
                   
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {
                   
                        <tr>
                            <td>001</td>
                            <td>La influencia del covid en la economia</td>
                            <td>No inscrito</td>
                            <td className="acciones">
                                <button className="btn-eliminar" type="button" >
                                    Inscibir/Retirar
                                </button>
                             
                            </td>
                        </tr>
                   
                }
            </tbody>
        </table>
    </div>
    )
}
export default Proyectosest;