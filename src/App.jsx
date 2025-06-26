import Entrevista from './components/Entrevista';
import TablaFamilia from './components/Tabla';
import Anamnesis from './components/Anamnesis';



const App= () => {
  return (
    <div className="App">
      <h1>Formulario de Entrevista</h1>
      <Entrevista />
      <h2>Grupo Familiar Conviviente</h2>
      <TablaFamilia />
      <h2>Formulario de Anamnesis</h2>
     <Anamnesis/>
    </div>
  );
}

export default App;