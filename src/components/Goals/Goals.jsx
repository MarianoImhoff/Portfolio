import React from "react";
import "./Goals.css";

const Goals = () => {
  return (
    <div className="containerGoals">
      <h1 className="h1Goals" id="Goals">Goals</h1>
      <div className="ContainerH">
      <h2 className="h2Goals">De aquí hacia adelante...</h2>
      <br/>
      <h4 className="h4Goals">
        Me motiva crear proyectos que realmente ayuden y tengan impacto en las
        personas.
      </h4>
      <h4 className="h4Goals">
        Mi deseo es formar parte de un equipo innovador donde reine el
        optimismo, el respeto y el compañerismo.
      </h4>
      <h4 className="h4Goals">
        Un equipo en el que todos los días pueda aprender, agregar valor, y que
        nuestros usuarios puedan crecer a partir de nuestras soluciones.
      </h4>
      </div>
    </div>
  );
};

export default Goals;
