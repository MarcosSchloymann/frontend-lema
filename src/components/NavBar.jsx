import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../public/img/logo-nav.jpg'

const NavBar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-md navbar-dark container">
				<div className="container-fluid">
					<div className='d-flex'>
						<NavLink className="nav-link-1 d-flex flex-row justify-contents-center align-items-center text-danger px-1" to="/inicio">
							<div className='px-2 d-flex flex-column justify-contents-center align-items-center'>
								<img src={Logo} height="100rem" alt="lema" />
							</div>
							<div className='vr '></div>
							<span className='font-nav text-danger px-1'> Tienda Online</span>

						</NavLink>
					</div>



					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>


					<div className="collapse navbar-collapse primary justify-content-end" id="navbarNav">
						<ul className="navbar-nav px-5">
							<li className="nav-item px-2">
								<NavLink className="nav-link" to="/preguntas">PREGUNTAS FRECUENTES</NavLink>
							</li>
							<li className="nav-item px-2">
								<NavLink className="nav-link" to="/categoria">INDUMENTARIA</NavLink>
							</li>
							<li className="nav-item px-2">
								<NavLink className="nav-link" to="/talles">TALLES</NavLink>
							</li>
							<li className="nav-item px-2">
								<NavLink className="nav-link" to="/diseno">DISEÑOS</NavLink>
							</li>
							<li className="nav-item px-2">
								<NavLink className="nav-link" to="/otrosproductos">OTROS PRODUCTOS</NavLink>
							</li>
							<li className="nav-item px-2">
								<NavLink className="nav-link" to="/clientes">CLIENTES</NavLink>
							</li>
						</ul>
					</div>


				</div>
			</nav>
		</>
	)
}

export default NavBar