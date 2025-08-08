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
            <input type="radio" id="si" value={tratamientos} name="trat" onChange={() => setTratamientos(true)} />si
            <input type="radio" id="no" value={tratamientos} name="trat" onChange={() => setTratamientos(false)} />no
        </div>
        <div id="si" style={{ display: tratamientos ? 'block' : 'none' }}>
            <label>¿Cuales?</label>
            <input type="text" value="" onChange={(e) => setTratamientos(e.target.value)} />
        </div>
        <div>
            <label>Patologia perinatal</label>
        <input type="text" value={patologiap} onChange={(e) => setPatologiap(e.target.value)} />
        </div>
        <div>
            <label>Enfermedades padecidas</label>
            <input type="radio" id="si" value={enfermedadespadecidas} name="ep" onChange={() => setEnfermedadespadecidas(true)} />si
            <input type="radio" id="no" value={enfermedadespadecidas} name="ep" onChange={() => setEnfermedadespadecidas(false)} />no
        </div>
        <div id="si" style={{ display: enfermedadespadecidas ? 'block' : 'none' }}>
            <label>¿Cuales?</label>
            <input type="text" value="" onChange={(e) => setEnfermedadespadecidas(e.target.value)} />
        </div>
        <div>
            <label>Alergias</label>
            <input type="radio" id="si" value={alergias} name="al" onChange={() => setAlergias(true)} />si
            <input type="radio" id="no" value={alergias} name="al" onChange={() => setAlergias(false)} />no
        </div>
        <div id="si" style={{ display: alergias ? 'block' : 'none' }}>
            <label>¿Cuales?</label>
            <input type="text" value="" onChange={(e) => setAlergias(e.target.value)} />
        </div>
        <div>
            <label>Patologías respiratorias</label>
            <input type="radio" id="si" value={patrespiratorias} name="pr" onChange={() => setPatrespiratorias(true)} />si
            <input type="radio" id="no" value={patrespiratorias} name="pr" onChange={() => setPatrespiratorias(false)} />no
        </div>
        <div id="si" style={{ display: patrespiratorias ? 'block' : 'none' }}>
            <label>¿Cuales?</label>
            <input type="text" value="" onChange={(e) => setPatrespiratorias(e.target.value)} />
        </div>
        <div>
            <label>Otras?</label>
            <input type="text" value={otrasPatologias} onChange={(e) => setOtraspatologias(e.target.value)} />
        </div>
        <div>
            <label>Toma medicamentos</label>
            <input type="radio" id="si" value={medicamentos} name="med" onChange={() => setMedicamentos(true)} />si
            <input type="radio" id="no" value={medicamentos} name="med" onChange={() => setMedicamentos(false)} />no
        </div>
        <div id="si" style={{ display: medicamentos ? 'block' : 'none' }}>
            <label>¿Cuales?</label>
            <input type="text" value="" onChange={(e) => setMedicamentos(e.target.value)} />
        </div>
        <div> 
            <label>Atenciones:(psicológica, fonoaudiológica, etc)</label>
            <input type="radio" id="si" value={Atenciones} name="at" onChange={() => setAtenciones(true)} />si
            <input type="radio" id="no" value={Atenciones} name="at" onChange={() => setAtenciones(false)} />no
        </div>
        <div id="si" style={{ display: Atenciones ? 'block' : 'none' }}>
            <label>¿Cuales?</label>
            <input type="text" value="" onChange={(e) => setAtenciones(e.target.value)} />
        </div>
        <div>
            <label>Disminuciones</label>
            <input type="radio" id="si" value={disminuciones} name="dism" onChange={() => setDisminuciones(true)} />si
            <input type="radio" id="no" value={disminuciones} name="dism" onChange={() => setDisminuciones(false)} />no
        </div>
        <div id="si" style={{ display: disminuciones ? 'block' : 'none' }}>
            <label>¿Cuales?</label>
            <input type="text" value="" onChange={(e) => setDisminuciones(e.target.value)} />
        </div>
        <div>
             <label> ¿Posee certificado de JUCAID? </label>
             <input type="radio" id="si" value={jucaid} name="jucaid" onChange={() => setJucaid(true)} /> si
             <input type="radio" id="no" value={jucaid} name="jucaid" onChange={() => setJucaid(false)} /> no
        </div>
        <div id="si" style={{ display: jucaid ? 'block' : 'none' }}>
            <label>ingrese credencial </label>
            <input type="text" value="" onChange={(e) => setJucaid(e.target.value)} />
        </div>
        <div> 
            <label>Se encuentra bajo situcion Judicial</label>
           <input type="radio" id="si" value={judicial} name="judicial" onChange={() => setJudicial(true)} /> si
           <input type="radio" id="no" value={judicial} name="judicial" onChange={() => setJudicial(false)} /> no
        </div>
        <div id="si" style={{ display: judicial ? 'block' : 'none' }}>
            <label>Caso por la detencion</label>
            <input type="text" value={caso} onChange={(e) => setCaso(e.target.value)} />
        </div>
        <div>
            <label>Realiza actividad Extraescolar</label>
            <input type="radio" id="si" value={extraesc}  name="ext" onChange={() => setExtraesc(true)} />si
            <input type="radio" id="no" value={extraesc} name="ext" onChange={() => setExtraesc(false)} />no
        </div>
        <div id="si" style={{ display: extraesc ? 'block' : 'none' }}>
            <label>¿cual?</label>
            <input type="text" value="" onChange={(e) => setExtraesc(e.target.value)} />
        </div>
        <div>
            <label>Elección de la escuela</label>
            <input type="text" value={eleccion} onChange={(e) => setEleccion(e.target.value)} />
        </div>
        <div>
            <label>Tiene hermanos dentro de la escuela</label>
            <input type="radio" id="si" value={hermanos} name="herm" onChange={() => setHermanos(true)} />si
            <input type="radio" id="no" value={hermanos} name="herm" onChange={() => setHermanos(false)} />no
        </div>
        <div id="si" style={{ display: hermanos ? 'block' : 'none' }}>
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
    </form>
    );
}

export default Anamnesis;