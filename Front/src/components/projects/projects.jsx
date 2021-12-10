import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { PageTitle } from '../page-title/page-title';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import './../../App.css';
import { useHistory } from 'react-router-dom';

const getProjects = gql`
    {
        getProyectos{
            id
        }
    }
`;

export const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [showProjects, setShowProjects] = useState(false);
    const history = useHistory();

    useEffect(() => {

    });

    function crearProyecto(e) {
        e.preventDefault();
        history.push('/proyectos/crearproyecto');
    }

    const { loading, error, data } = useQuery(getProjects);
    if (loading) return <p>Cargando...</p>;
    if (error) {
        console.log(error);
        return <p>Error</p>;
    }
    console.log(data);
    return (
        <div className="page-container">
            <PageTitle title={'Proyectos'} />
            <div className='page-actions'>
                <Button onClick={crearProyecto}>Agregar Proyecto</Button>
                <Button className='btn-warning'>Regresar</Button>
            </div>
        </div>
    );
}

