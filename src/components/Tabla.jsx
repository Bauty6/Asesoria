import React, {useState} from "react";

const TablaFamilia=()=> {
  const [familia, setFamilia] = useState([
    { nombre: "", parentezco: "", edad: "", escolaridad: "", ocupacion: "", horario: "" }
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const nuevaFamilia = [...familia];
    nuevaFamilia[index][name] = value;
    setFamilia(nuevaFamilia);
  };

  const agregarFila = () => {
    setFamilia([...familia, { nombre: "", parentezco: "", edad: "", escolaridad: "", ocupacion: "", horario: "" }]);
  };

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Parentezco</th>
            <th>Edad</th>
            <th>Escolaridad</th>
            <th>Ocupación</th>
            <th>Horario Laboral</th>
          </tr>
        </thead>
        <tbody>
          {familia.map((familiar, index) => (
            <tr key={index}>
              <td><input type="text" name="nombre" value={familiar.nombre} onChange={(e) => handleChange(index, e)} /></td>
              <td><input type="text" name="parentezco" value={familiar.parentezco} onChange={(e) => handleChange(index, e)} /></td>
              <td><input type="number" name="edad" value={familiar.edad} onChange={(e) => handleChange(index, e)} /></td>
              <td><input type="text" name="escolaridad" value={familiar.escolaridad} onChange={(e) => handleChange(index, e)} /></td>
              <td><input type="text" name="ocupacion" value={familiar.ocupacion} onChange={(e) => handleChange(index, e)} /></td>
              <td><input type="text" name="horario" value={familiar.horario} onChange={(e) => handleChange(index, e)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={agregarFila}>Agregar Familiar</button>
    </div>
      
  );
}

export default TablaFamilia;