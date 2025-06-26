import React, {useState} from "react";

const Anamnesis = () => {
    const [condembarazo, setCondembarazo] = useState("");
    const [parto, setParto] = useState("");
    const [tratamientos, setTratamientos] = useState("");
    const [patologiap, setPatologiap] = useState("");
    const [enfermedadespadecidas, setEnfermedadespadecidas] = useState("");
    const [alergias, setAlergias] = useState("");
    const [patrespiratorias, setPatrespiratorias] = useState("");
    const [otrasPatologias, setOtraspatologias] = useState("");
    const [medicamentos, setMedicamentos] = useState("");
    const [Atenciones, setAtenciones] =useState("");
    const [disminuciones, setDisminuciones] = useState("");
    const [jucaid, setJucaid] = useState("");
    const [judicial, setJudicial] = useState("");
    const [caso, setCaso] = useState("");
    const [extraesc, setExtraesc] = useState("");
    const [eleccion, setEleccion] = useState("");
    const [hermanos, setHermanos] = useState("");
    const [turno, setTurno] = useState("");
    const [observaciones, setObservaciones] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario enviado correctamente");
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
        console.log("Condición de embarazo:", condembarazo);
        console.log("Parto:", parto);
        console.log("Tratamientos:", tratamientos);
        console.log("Patología perinatal:", patologiap);
        console.log("Enfermedades padecidas:", enfermedadespadecidas);
        console.log("Alergias:", alergias);
        console.log("Patologías respiratorias:", patrespiratorias);
        console.log("Otras patologías:", otrasPatologias);
        console.log("Medicamentos:", medicamentos);
        console.log("Atención al tratamiento:", Atenciones);
        console.log("Disminuciones:", disminuciones);
        console.log("JUCaid:", jucaid);
        console.log("Judicial:", judicial);
        console.log("Caso:", caso);
        console.log("Extraescolar:", extraesc);
        console.log("Elección de la escuela:", eleccion);
        console.log("Hermanos:", hermanos);
        console.log("Turno:", turno);
        console.log("Observaciones:", observaciones);
    };

    return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Condiciones del embarazo</label>
            <input type="text" value={condembarazo} onChange={(e) => setCondembarazo(e.target.value)} />
        </div>
        <div>
            <label>Parto</label>
            <input type="text" value={parto} onChange={(e) => setParto(e.target.value)} />
        </div>
        <div>
            <label>Tratamientos</label>
            <input type="text" value={tratamientos} onChange={(e) => setTratamientos(e.target.value)} />
        </div>
        <div>
            <label>Patologia perinatal</label>
        <input type="text" value={patologiap} onChange={(e) => setPatologiap(e.target.value)} />
        </div>
        <div>
            <label>Enfermedades padecidas</label>
            <input type="text" value={enfermedadespadecidas} onChange={(e) => setEnfermedadespadecidas(e.target.value)} />
        </div>
        <div>
            <label>Alergias</label>
            <input type="text" value={alergias} onChange={(e) => setAlergias(e.target.value)} />
        </div>
        <div>
            <label>Patologías respiratorias</label>
            <input type="text" value={patrespiratorias} onChange={(e) => setPatrespiratorias(e.target.value)} />   
        </div>
        <div>
            <label>Otras?</label>
            <input type="text" value={otrasPatologias} onChange={(e) => setOtraspatologias(e.target.value)} />
        </div>
        <div>
            <label>Toma medicamentos</label>
            <input type="text" value={medicamentos} onChange={(e) => setMedicamentos(e.target.value)} />
        </div>
        <div> 
            <label>Atenciones:(psicológica, fonoaudiológica, etc)</label>
            <input type="text" value={Atenciones} onChange={(e) => setAtenciones(e.target.value)} />
        </div>
        <div>
            <label>Disminuciones</label>
            <input type="text" value={disminuciones} onChange={(e) => setDisminuciones(e.target.value)} />
        </div>
        <div>
            <label>Posee certificado de JUCAID</label>
            <input type="text" value={jucaid} onChange={(e) => setJucaid(e.target.value)} />
        </div>
        <div>
            <label>Se encuentra bajo situcion Judicial</label>
            <input type="text" value={judicial} onChange={(e) => setJudicial(e.target.value)} />
        </div>
        <div>
            <label>Caso por la detencion</label>
            <input type="text" value={caso} onChange={(e) => setCaso(e.target.value)} />
        </div>
        <div>
            <label>Realiza actividad Extraescolar</label>
            <input type="text" value={extraesc} onChange={(e) => setExtraesc(e.target.value)} />
        </div>
        <div>
            <label>Elección de la escuela</label>
            <input type="text" value={eleccion} onChange={(e) => setEleccion(e.target.value)} />
        </div>
        <div>
            <label>Tiene hermanos dentro de la escuela</label>
            <input type="text" value={hermanos} onChange={(e) => setHermanos(e.target.value)} />
        </div>
        <div>
            <label>Turno al que el hermano asiste</label>
            <input type="text" value={turno} onChange={(e) => setTurno(e.target.value)} />
        </div>
        <div>
            <label>Observaciones</label><br/>
            <textarea
                value={observaciones}
                onChange={(e) => setObservaciones(e.target.value)}
                rows={4}
                cols={50}
                placeholder="Observaciones adicionales"
            />
        </div>
        <button type="submit">Enviar</button>
    </form>
    );
}

export default Anamnesis;