import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="containerAbout" >
    <h1 className='h1About' id='About'>About</h1>
    <div className="row">
    <div className="col-6">
    <div className="divH3About">
    <h3 className="h3About">MI</h3>
    </div>
    <div className="divH4About">
    <h4 className="h4About">Full-Stack Developer</h4>
    </div>
    </div>
      <div className="col-6">
    <h2 className='h2About'>Hola soy Mariano Imhoff, de Buenos Aires, Argentina.
    <br/>
    La búsqueda de aprendizaje me llevó a involucrarme
    con la programación, y en 2022 emprendí un Cooding
    Bootcamp en donde luego de mas de 800hs. logré
    perfeccionar mis habilidades blandas y técnicas.
    Con diez años liderando un comercio, desarrollé
    destrezas para el trabajo en equipo, planificación y
    cumplimiento de objetivos, con capacidad para el
    trabajo bajo presión.
    Estoy en búsqueda de desafíos para superarme y seguir
    aprendiendo en este nuevo código el cual me apasiona.</h2>
      </div>
      </div>
      </div>
      
  )
}

export default About