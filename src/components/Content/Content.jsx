import React from "react";
import "./Content.css";
import Photo from "../../assets/Content/Mariano.png";
import CV from "../../assets/Content/CV Mariano Imhoff V1.0.pdf";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const Content = () => {
  return (
    <div className="containerContent">
      <div className="row">
        <div className="col-4">
          <div className="btnBorder">
            <img className="photo" src={Photo} alt="Mariano" />
          </div>
        </div>
        <div className="col-8">
          <h1 className="contentName">Mariano Imhoff</h1>
          <h2 className="profesion">FullStack Developer</h2>
          <div className="btnContent">
            <a href="https://github.com/MarianoImhoff" target="_blank">
              <button className="btn"><FaGithub className="ReactIcon"/><span className="textIcon">GitHub</span></button>
            </a>
            <br />
            <a href="https://linkedin.com/in/marianoimhoff" target="_blank">
              <button className="btn">
                <FaLinkedin className="ReactIcon"/>
                <span className="textIcon">LinkeIn</span>
              </button>
            </a>
            <br />
            <a download={"CV_Mariano_Imhoff.pdf"} href={CV}>
              <button className="btn btnCv">
                <ImProfile className="ReactIcon"/>
                <span className="textIcon">Curriculum Vitae</span>
              </button>
            </a>
            <br />
            <a
              href="https://api.whatsapp.com/send/?phone=%2B5491161918486&amp;text&amp;app_absent=0"
              target="_blank"
            >
              <button className="btn">
                <IoLogoWhatsapp className="ReactIcon"/>
                <span className="textIcon">Whatsapp</span>
              </button>
            </a>
            <br />
            <a
              href="mailto:imhmariano@gmail.com?subject=SendMail&body=Description"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">
                <SiGmail className="ReactIcon"/>
                <span className="textIcon">Gmail</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

{
  /* <div>
         <h4 className={style.about}>
        La b??squeda de aprendizaje me llev?? a involucrarme con la
        programaci??n, y en 2022 emprend?? un Cooding Bootcamp en donde luego de
        mas de 800hs. logr?? perfeccionar mis habilidades blandas y t??cnicas.
        Con diez a??os liderando un comercio, desarroll?? destrezas para el
        trabajo en equipo, planificaci??n y cumplimiento de objetivos, con
        capacidad para el trabajo bajo presi??n. Estoy en b??squeda de desaf??os
        para superarme y seguir aprendiendo en este nuevo c??digo el cual me
        apasiona.
      </h4>
      </div> */
}
