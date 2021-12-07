import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { PageTitle } from '../page-title/page-title';
import './../../App.css';

export const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [showProjects, setShowProjects] = useState(false);

    useEffect(() => {

    });

    return (
        <div className="page-container">
            <PageTitle title={'Proyectos'}/>
            <div className='page-actions'>
                <Button>Agregar Proyecto</Button>
                <Button className='btn-warning'>Regresar</Button>
            </div>
            {/* <Table>
                <Table.Header>
                    
                </Table.Header>
            </Table> */}
        </div>
    );
}

