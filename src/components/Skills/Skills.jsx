import React from "react";
import "./Skills.css";
import node from "../../assets/Technologies/Node.png";
import js from "../../assets/Technologies/JS.png";
import postgress from "../../assets/Technologies/Postgress.png";
import react from "../../assets/Technologies/React.png";
import redux from "../../assets/Technologies/Redux.png";
import express from "../../assets/Technologies/Express.png";
import css from "../../assets/Technologies/CSS.png";
import html from "../../assets/Technologies/HTML.png";
import git from "../../assets/Technologies/Git.png";
import linux from "../../assets/Technologies/Linux.png";
import sequelize from "../../assets/Technologies/Sequelize.png";

const Skills = () => {
  return (
    <div className="containerSkills">
      <h1 className="h1Skills" id="Skills">Skills</h1>
      <div className="row">
        <div className="col-12">
          <div className="containerSkills">
            <img className="skills" src={node} alt="node" />
            <h3 className="h3Skills">Node.Js</h3>
          </div>
          <div className="containerSkills">
            <img className="skills" src={sequelize} alt="sequelize" />
            <h3 className="h3Skills">Sequelize</h3>
          </div>
          <div className="containerSkills">
            <img className="skills" src={postgress} alt="postgress" />
            <h3 className="h3Skills">Postgress</h3>
          </div>
          <div className="containerSkills">
            <img className="skills" src={express} alt="express" />
            <h3 className="h3Skills">Express</h3>
          </div>
          <div></div>
        </div>
        <div className="row rowTechnologies">
          <div className="col-12">
            <div className="containerSkills">
              <img className="skills" src={linux} alt="linux" />
              <h3 className="h3Skills">Linux</h3>
            </div>
            <div className="containerSkills">
              <img className="skills" src={js} alt="js" />
              <h3 className="h3Skills">JavaScript</h3>
            </div>
            <div className="containerSkills">
              <img className="skills" src={git} alt="git" />
              <h3 className="h3Skills">Git</h3>
            </div>
          </div>
        </div>
        <div className="row rowTechnologies">
          <div className="col-12 columnTechnologies">
            <div className="containerSkills">
              <img className="skills" src={react} alt="react" />
              <h3 className="h3Skills">React</h3>
            </div>
            <div className="containerSkills">
              <img className="skills" src={redux} alt="redux" />
              <h3 className="h3Skills">Redux</h3>
            </div>
            <div className="containerSkills">
              <img className="skills" src={html} alt="html" />
              <h3 className="h3Skills">HTML</h3>
            </div>
            <div className="containerSkills">
              <img className="skills" src={css} alt="css" />
              <h3 className="h3Skills">CSS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
