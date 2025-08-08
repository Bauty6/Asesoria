import React, {useState} from "react";

const Entrevista = () => {
    const [escorigen, setEscorigen] = useState("");
    const [fecha, setFecha]=useState("");
    const [asesor, setAsesor] = useState("");
    const [nombre, setNombre]= useState("");
    const [apellido, setApellido]=useState("");
    const [lugarn, setLugarn]=useState("");
    const [fechana, setFechana]=useState("");
    const [edad, setEdad]=useState("");
    const [dni, setDni]=useState("");
    const [domicilio, setDomicilio]=useState("");
    const [barrio, setBarrio]=useState("");
    const [telefono, setTelefono]=useState("");
    const [emergencia, setEmergencia]=useState("");
    const [jardin, setJardin] = useState("");
    const [primaria,setPrimaria] = useState("");
    const [apreferida, setApreferida] = useState("");
    const [adificultad, setAdificultad] = useState("");
    const [emergencias, setEmergencias] = useState([""]);
    const agregarEmergencia = () => {
    setEmergencias([...emergencias, ""]);
    };
    const cambiarEmergencia = (index, valor) => {const nuevas = [...emergencias];nuevas[index] = valor;
    setEmergencias(nuevas);
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario enviado correctamente");
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
        console.log("escuela de origen", escorigen);
        console.log("fecha", fecha);
        console.log("asesor:", asesor);
        console.log("nombre:", nombre);
        console.log("apellido:", apellido);
        console.log("lugar de nacimiento:", lugarn);
        console.log("fecha de nacimiento:", fechana);
        console.log("edad:", edad);
        console.log("dni:", dni);
        console.log("domicilio:", domicilio);
        console.log("barrio:", barrio);
        console.log("teléfono:", telefono);
        console.log("contacto de emergencia:", emergencia);
        console.log("jardín:", jardin);
        console.log("primaria:", primaria);
        console.log("area preferida:", apreferida);
        console.log("area dificultosa:", adificultad);
        };

    return (
        <form onSubmit={handleSubmit}>
             <div>
                <label>Fecha:</label>
                <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            </div>
            <div>
                <label>Asesor:</label>
                <input type="text" value={asesor} onChange={(e) => setAsesor(e.target.value)} />
            </div>
            <div>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div>
                <label>Apellido:</label>
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            </div>
            <div>
                <label>Escuela de origen:</label>
                <input type="text" value={escorigen} onChange={(e) => setEscorigen(e.target.value)} />
            </div>
            <div>
                <label>Lugar de nacimiento:</label>
                <input type="text" value={lugarn} onChange={(e) => setLugarn(e.target.value)} />
            </div>
            <div>
                <label>Fecha de nacimiento:</label>
                <input type="date" value={fechana} onChange={(e) => setFechana(e.target.value)} />
            </div>
            <div>
                <label>Edad:</label>
                <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} />
            </div>
            <div>
                <label>DNI:</label>
                <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} />
            </div>
            <div>
                <label>Domicilio:</label>
                <input type="text" value={domicilio} onChange={(e) => setDomicilio(e.target.value)} />
            </div>
            <div>
                <label>Barrio:</label>
                <input type="text" value={barrio} onChange={(e) => setBarrio(e.target.value)} />
            </div>
            <div>
                <label>Teléfono:</label>
                <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <div>
                <label>Contacto de emergencia:</label>
                {emergencias.map((em, index) => (
                <input key={index} type="text" value={em} onChange={(e) => cambiarEmergencia(index, e.target.value)} />
                ))}
                <button type="button" onClick={agregarEmergencia}> Agregar contacto </button>
            </div>
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

export default Entrevista;