import { Route, BrowserRouter, Routes } from "react-router-dom";
import Registro from './componentes/RegistroUsuario.js';
import Tarifas from "./componentes/Tarifas.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/registro' element={<Registro></Registro>}></Route>
        <Route path='/tarifas' element={<Tarifas></Tarifas>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
