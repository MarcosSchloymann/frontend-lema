import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../public/img/logo-nav.jpg'

const NavBar = () => {
    return (
<>
        <nav className="navbar navbar-expand-lg p-2">
            <div className="container">
                <a className="navbar-brand me-lg-5 me-0" href="index.html">
                    <img src={Logo} className="logo-image img-fluid p-4" alt="templatemo pod talk"/>
                </a>


                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-lg-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/inicio">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categorias">Categorias</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/preguntas">Preguntas Frecuentes</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/talles">Talles</NavLink>
                        </li>
                    </ul>

                    {/* <div className="ms-4">
                        <a href="" class="btn custom-btn custom-border-btn smoothscroll">Login</a>
                    </div> */}
                </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar