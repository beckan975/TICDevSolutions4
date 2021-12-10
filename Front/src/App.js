import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Formulario from './components/Formulario';
import Login from './components/login/Login';
import Registro from './components/registro/Registro';
import Proyectos from './components/gestionp/gestion';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/gestion" component={Proyectos} />
        </Switch>
      </BrowserRouter>   
    </div>
  );
}

export default App;
