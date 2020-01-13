import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import clienteAxios from './config/axios';

//Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {

  // State de la app
  const [citas, guardarCitas] = useState([]);
  const [consultar, guardarConsultar] = useState(true); //Esta como true porque queremos que la 1era vez que carge consulte la API


  useEffect(() => {
    if (consultar) {
      const consultarAPI = () => {
        clienteAxios.get('/pacientes')
          .then((respuesta) => {
            // colocar en el state el resultado
            guardarCitas(respuesta.data);

            // Deshabilitar la consulta
            guardarConsultar(false);
          })
          .catch((error) => {
            console.log(error);
          })
      }
      consultarAPI();
    }
  }, [consultar]); //consultar aqui, es para decirle a REACT que cuando cambie consultar se ejecute de nuevo

  console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <Router>
      <Switch>
        <Route
          exact path='/'
          component={() => <Pacientes citas={citas} />}
        />
        <Route
          exact path='/nueva'
          component={() => <NuevaCita guardarConsultar={guardarConsultar} />}
        />
        <Route
          exact path='/cita/:id'
          component={Cita}
        />
      </Switch>
    </Router>
  );
}

export default App;
