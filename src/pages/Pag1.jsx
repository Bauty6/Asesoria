import react from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Entrevista from "../components/Entrevista";
import TablaFamilia from '../components/Tabla'; 
import Pag2 from './Pag2';
import { BrowserRouter as Route,Router,Routes } from 'react-router-dom';

const Pag1 = () => {
    const Navigate = useNavigate();
    return (
        <div>
            <h1>Bienvenido a la Asesoría Escolar</h1>
            <Entrevista/>
            <br/>
            <TablaFamilia/>
            <buttom on onClick={() => Navigate('/pag2')}>Siguiente</buttom>
        </div>
    );
}
export default Pag1; 