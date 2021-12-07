import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Formulario from './components/Formulario';
import Login from './components/login/Login';
import Registro from './components/registro/Registro';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registro" component={Registro} />
        </Switch>
      </BrowserRouter>   
    </div>
  );
}

export default App;
