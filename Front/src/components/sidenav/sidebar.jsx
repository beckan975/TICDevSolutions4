import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to ={'/'} className="navbar-brand">TicDev's Solutions</Link>
                <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link active">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/proyectos'} className="nav-link" >Proyectos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Navbar>
    );
}