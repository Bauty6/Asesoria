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
    const [emergencias, setEmergencias] = useState([""]);
    const [emergencia, setEmergencia]=useState("");
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
        };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Entrevista</h1>
            </div>
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
        </form>
    );



}

export default Entrevista;