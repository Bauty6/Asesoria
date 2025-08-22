import react from 'react';
import { Navigate } from 'react-router-dom';
import DatosEscolares from "../components/DatosEscolares";
import Anamnesis from "../components/Anamnesis";
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../components/SubmitButton';

const Pag2 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <DatosEscolares/>
            <br/>
            <Anamnesis/>
            <submitButton onClick={() => navigate('/')} className="mt-3">Enviar</submitButton>
             <button onClick={() => navigate(-1)}>Anterior</button>
        </div>
    );
}
export default Pag2;