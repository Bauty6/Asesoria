import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppRoute from './pages/routes/Approute';



const App= () => {
  return (
      <Router>
       <AppRoute />
      </Router>
  );
}

export default App;