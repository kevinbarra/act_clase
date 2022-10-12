import React from "react";


const Alumno = () => {
  const alumnos = [
    ["kevin", 189573],
    ["luis", 189578],
    ["juan", 189576],
  ];
  return (
    <>
      <h1>Lista de alumnos</h1>
      <ul>
        {alumnos.map((nombre, i) => {
          return (
            <li>
              {nombre.map((matricula, sIndex) => {
                return <p> {matricula} </p>;
              })}
            </li>
          );
        })}
      
      </ul>
    </>
  );
};

export default Alumno;
