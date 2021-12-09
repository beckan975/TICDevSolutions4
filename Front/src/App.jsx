import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Formulario from './components/Formulario';
import Login from './components/login/Login';
import { CreateProjects } from './components/projects/createProjects';
import { Projects } from './components/projects/projects';
import Registro from './components/registro/Registro';
import { Sidebar } from './components/sidenav/sidebar';

function App() {
  return (

    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/proyectos" component={Projects} />
        <Route exact path="/proyectos/crearproyecto" component={CreateProjects} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
