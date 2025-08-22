import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pag1 from '../Pag1';
import Pag2 from '../Pag2';
import SubmitButton from '../../components/SubmitButton';


const AppRoute = () => {
    return (
            <Routes>
                <Route path="/" element={<Pag1 />} />
                <Route path="/pag2" element={<Pag2 />} />
                <Route path="/submit" element={<SubmitButton />} />
            </Routes>
    );
}

export default AppRoute;