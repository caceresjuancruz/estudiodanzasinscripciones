import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [fichas, setFichas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://estudiodedanzasvivianamussobackend.onrender.com/inscripciones"
      );
      setFichas(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <h1>Inscripciones</h1>

      <table className="table caption-top table-bordered table-striped">
        <caption>Fichas personales</caption>
        <thead>
          <tr className="table-danger">
            <th scope="col">DNI</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Domicilio</th>
            <th scope="col">Barrio</th>
            <th scope="col">Celular</th>
            <th scope="col">Fecha Nacimiento</th>
            <th scope="col">Edad</th>
            <th scope="col">Obra Social</th>
            <th scope="col">Grupo Sanguineo</th>
            <th scope="col">Observaciones</th>
            <th scope="col">Nombre Madre</th>
            <th scope="col">Direccion Madre</th>
            <th scope="col">Celular Madre</th>
            <th scope="col">Mail Madre</th>

            <th scope="col">Nombre Padre</th>
            <th scope="col">Direccion Padre</th>
            <th scope="col">Celular Padre</th>
            <th scope="col">Mail Padre</th>

            <th scope="col">Disciplina</th>
            <th scope="col">Año Comienzo</th>
            <th scope="col">Emergencia avisar a</th>
            <th scope="col">Tel</th>
            <th scope="col">Cel</th>
            <th scope="col">Parentesco</th>
          </tr>
        </thead>
        <tbody>
          {fichas.map((ficha, index) => (
            <tr key={index}>
              <td>{ficha.DNI}</td>
              <td>{ficha.NombreAlumna}</td>
              <td>{ficha.ApellidoAlumna}</td>
              <td>{ficha.DomicilioAlumna}</td>
              <td>{ficha.BarrioAlumna}</td>
              <td>{ficha.CelularAlumna}</td>
              <td>{ficha.FechaNacimiento.substring(0, 10)}</td>
              <td>{ficha.Edad}</td>
              <td>{ficha.ObraSocial}</td>
              <td>
                {ficha.IdGrupoSanguineo === 1
                  ? "A+"
                  : ficha.IdGrupoSanguineo === 2
                  ? "A-"
                  : ficha.IdGrupoSanguineo === 3
                  ? "B+"
                  : ficha.IdGrupoSanguineo === 4
                  ? "B-"
                  : ficha.IdGrupoSanguineo === 5
                  ? "AB+"
                  : ficha.IdGrupoSanguineo === 6
                  ? "AB-"
                  : ficha.IdGrupoSanguineo === 7
                  ? "O+"
                  : "O-"}
              </td>
              <td>{ficha.Observaciones}</td>
              <td>{ficha.NombreMadre}</td>
              <td>{ficha.DireccionMadre}</td>
              <td>{ficha.CelularMadre}</td>
              <td>{ficha.MailMadre}</td>
              <td>{ficha.NombrePadre}</td>
              <td>{ficha.DireccionPadre}</td>
              <td>{ficha.CelularPadre}</td>
              <td>{ficha.MailPadre}</td>
              <td>
                {ficha.IdDisciplina === 1
                  ? "Danza Clásica"
                  : ficha.IdDisciplina === 2
                  ? "Danza Jazz"
                  : ficha.IdDisciplina === 3
                  ? "Urbano"
                  : "Iniciación a la Danza"}
              </td>
              <td>{ficha.AñoComienzo}</td>
              <td>{ficha.EmergenciaAvisarA}</td>
              <td>{ficha.EmergenciaTel}</td>
              <td>{ficha.EmergenciaCel}</td>
              <td>{ficha.EmergenciaParentesco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
