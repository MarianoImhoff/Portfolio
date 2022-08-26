import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import TMDB from "../../assets/Projects/TMDB.jpeg";
import ECommerce from "../../assets/Projects/ECommerce.jpg";
import BotDiscord from "../../assets/Projects/BotDiscord.png";
import GlobalNews from "../../assets/Projects/GlobalNews.png";

const Proyects = () => {
  return (
    <div className="containerProjects">
      <h1 className="h1Projects" id="Projects">
        Projects
      </h1>

      <div className="row rowProjects">
        <div className="col colImagen">
          <img className="imgProjects" alt="TMDB" src={TMDB} />
        </div>
        <div className="col colDescription">
          <h4 className="h4Projects">TMDB</h4>
          <p className="pProjects">
            Proyecto individual, es una web app para conocer los últimos
            estrenos de Cine y Series.
            <br />
            Consume información de una API externa, por medio de su buscador se
            puede encontrar la película deseada, permite agregarlas a favoritos,
            ver las películas que tus amigos tienen en favoritos, inicio de
            sesión.
            <br />
            <strong>
              Construido en React y Redux en Front-End y NodeJs, Express,
              Sequelize, y PostgreSQL para la gestión de sesiones en Back-End.
            </strong>
          </p>
          <a href="https://github.com/MarianoImhoff/TMDB" target="_blank">
            <button className="btnProjects">
              <FaGithub className="ReactIconProject" />
              <span className="textIconProyect">GitHub</span>
            </button>
          </a>
        </div>
      </div>

      <div className="row rowProjects">
        <div className="col colImagen">
          <img className="imgProjects" src={ECommerce} alt="ECommerce" />
        </div>
        <div className="col colDescription">
          <h4 className="h4Projects">Ecomerce</h4>
          <p className="pProjects">
            Proyecto grupal, es una aplicación de venta de calzados, con manejo
            de stock, publicación de nuevos productos y en caso de ser
            necesario, edición de datos ya existentes. Cuenta con manejo de
            sesiones para usuarios y administradores, con sus respectivas
            funcionalidades.
            <br />
            <strong>
              Construido en React y React Context en Front-End y NodeJs,
              Express, Sequelize, y PostgreSQL para la gestión de sesiones en
              Back-End.
            </strong>
          </p>
          <a
            href="https://github.com/MarianoImhoff/AirCommerce"
            target="_blank"
          >
            <button className="btnProjects">
              <FaGithub className="ReactIconProject" />
              <span className="textIconProyect">GitHub</span>
            </button>
          </a>
        </div>
      </div>

      <div className="row rowProjects">
        <div className="col colImagen">
          <img className="imgProjects" alt="GlobalNews" src={GlobalNews} />
        </div>
        <div className="col colDescription">
          <h4 className="h4Projects">Global News</h4>
          <p className="pProjects">
            Proyecto grupal de un mes de duración presentado por Global News
            Group como práctica profesional para Coding Bootcamp.
            <br />
            El objetivo principal fue crear una app de celular para el manejo de
            equipos de trabajo en toda América y monitorear a los empleados,
            permitiéndoles solicitar licencia para que su inmediato superior sea
            notificado y lo apruebe o rechace y luego pase al área de Recursos
            Humanos
            <br />
            <strong>
              Construido en React Native con Expo y Redux para en Front-End y
              NodeJs, Express, Sequelize, PostgreSQL y JWT para la gestión de
              sesiones en Back-End.
            </strong>
          </p>
          <a href="https://github.com/MarianoImhoff/GlobalNews" target="_blank">
            <button className="btnProjects">
              <FaGithub className="ReactIconProject" />
              <span className="textIconProyect">GitHub</span>
            </button>
          </a>
        </div>
      </div>

      <div className="row rowProjects">
        <div className="col colImagen">
          <img className="imgProjects" alt="GlobalNews" src={BotDiscord} />
        </div>
        <div className="col colDescription">
          <h4 className="h4Projects">Bot Discord</h4>
          <p className="pProjects">
            Proyecto individual, pensado y creado para una Tech Talk para Coding
            Bootcamp.
            <br />
            El objetivo principal fue crear un bot, el cual a pedido de usuario,
            por medio de un comando especial, cuente un chiste de manera random
            en el canal del Cooding Bootcamp de la plataforma Discord , con el
            fin de ayudar a distender en momentos donde la frustracion o nervios
            se hacian presentes.
            <br />
            <strong>
              Construido con lenguaje JavaScript, con la libreria de Discord.
            </strong>
          </p>
          <a href="https://github.com/MarianoImhoff/BotDiscord" target="_blank">
            <button className="btnProjects">
              <FaGithub className="ReactIconProject" />
              <span className="textIconProyect">GitHub</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
