import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-black p-3" data-bs-theme="dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <img src="" alt="img" className='px-5' />
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item px-5">
                            <NavLink className="nav-link" to="/inicio">Home</NavLink>
                        </li>
                        <li className="nav-item px-5">
                            <NavLink className="nav-link" to="/categorias">Categorias</NavLink>
                        </li>
                        <li className="nav-item px-5">
                            <NavLink className="nav-link" to="/preguntas">Preguntas Frecuentes</NavLink>
                        </li>
                        <li className="nav-item px-5">
                            <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                        </li>
                        <li className="nav-item px-5">
                            <NavLink className="nav-link" to="/talles">Talles</NavLink>
                        </li>
                    </ul>
                    <button className="btn btn-outline-success px-3" type="submit">
                        <NavLink className="nav-item button-header">Login</NavLink>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar