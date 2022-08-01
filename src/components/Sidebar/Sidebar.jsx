import React from 'react'
import style from './Sidebar.module.css'
import FotoPerfil from '../../assets/Mariano.png'

const Sidebar = () => {
  return (
 
    <div className={style.sidebar}>
    <div className={style.name}><h1 className={style.h1}>Mariano <br/>Imhoff</h1></div>
    <div className={style.photoContainer}>
    <img className={style.photo} src={FotoPerfil} alt='Mariano' width='100%'/>
    </div>
    <div>
    <ul className={style.ul}>
    <li className={style.text}>Proyects</li>
    <li className={style.text}>Education</li>
    <li className={style.text}>Technologies</li>
    <li className={style.text}>Goals</li>
    </ul>
    </div>
    </div>
   
  )
}

export default Sidebar