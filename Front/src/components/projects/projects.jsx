import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { PageTitle } from '../page-title/page-title';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import './../../App.css';

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


    useEffect(() => {

    });

    const { loading, error, data } = useQuery(getProjects);
    if (loading) return <p>Cargando...</p>;    
    if (error){
        console.log(error);
        return <p>Error</p>;
    }   
    console.log(data);
    return (
        <div className="page-container">
            <PageTitle title={'Proyectos'} />
            <div className='page-actions'>
                <Button>Agregar Proyecto</Button>
                <Button className='btn-warning'>Regresar</Button>
            </div>
        </div>
    );
}

