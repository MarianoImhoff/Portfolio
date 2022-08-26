import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'



const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-black fixed-top sticky-top">
  <div className="container-fluid">
  <Link to='/'>
    <a className="navbar-brand name" href="#">Mariano Imhoff</a>
    </Link>
    <button className="navbar-toggler but" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item text">
      <Link to='/About'>
          <a className="nav-link text" aria-current="page" href="#About">About</a>
          </Link>
        </li>
        <li className="nav-item text">
        <Link to='/Goals'>
          <a className="nav-link text" href="#Goals">Goals</a>
          </Link>
        </li>
        <li className="nav-item text">
        <Link to='/Skills'>
          <a className="nav-link text" href="#Skills">Skills</a>
          </Link>
        </li>
        <li className="nav-item text">
        <Link to='/Projects'>
          <a className="nav-link text" href="#Projects">Projects</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar