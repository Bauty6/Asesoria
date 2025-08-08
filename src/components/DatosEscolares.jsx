import React, { useState } from "react";

const DatosEscolares = () => {
    const [jardin, setJardin] = useState("");
    const [primaria,setPrimaria] = useState("");
    const [apreferida, setApreferida] = useState("");
    const [adificultad, setAdificultad] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario enviado correctamente");
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
        console.log("Jardín:", jardin);
        console.log("Primaria:", primaria);
        console.log("Área preferida:", apreferida);
        console.log("Área dificultosa:", adificultad);
    }

    return (
        <form onSubmit={handleSubmit}>
         <h3>Datos Escolares</h3>
            <h4>historia de los aprendizajes escolares (consignar el año, escuela o jardin, el grado cursado, las dificultades, etc.)</h4>
            <div>
                <label>Jardín:</label><br/>
              <textarea
                value={jardin}
                onChange={(e) => setJardin(e.target.value)}
                rows={2}
                cols={20}
                placeholder="informacion de jardin"
                />
            </div>
            <div>
                <label>Primaria:</label><br/>
                <textarea
                    value={primaria}
                    onChange={(e) => setPrimaria(e.target.value)}
                    rows={2}
                    cols={20}
                    placeholder="informacion de primaria"
                />
            </div>
            <div>
                <label>Areas</label><br/>
                <textarea
                    value={apreferida}
                    onChange={(e) => setApreferida(e.target.value)}
                    rows={2}
                    cols={20}
                    placeholder="Area preferida"/>
                <textarea
                    value={adificultad}
                    onChange={(e) => setAdificultad(e.target.value)}
                    rows={2}
                    cols={20}
                    placeholder="Area dificultosa"/>
            </div>
            </form>   
    );
}

export default DatosEscolares;