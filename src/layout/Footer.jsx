import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
	return (
		<div className="footer-area bg-dark text-danger">
			<div className="container d-flex justify-content-evenly">
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="footer-box about-widget">
							<h2 className="widget-title">Nosotros</h2>
							<p>
								Somos una empresa familiar que nos dedicamos a vestir campeones, 
								<br />
								Lo que nos apasiona tanto como practicar deportes
							</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="footer-box get-in-touch">
							<h2 className="widget-title">Contáctanos</h2>
							<ul>
								<li>Hacemos envíos a todo el país</li>
								<li>Instagram: lemasc23</li>
								<li>+54 9 387 2544368</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="footer-box pages">
							<h2 className="widget-title">Secciones</h2>
							<ul className='3 text-white'>
								<li className="nav-item px-">
									<NavLink className="nav-link px-3" to="/inicio">INICIO</NavLink>
								</li>
								<li className="nav-item px-3">
									<NavLink className="nav-link" to="/preguntas">PREGUNTAS FRECUENTES</NavLink>
								</li>
								<li className="nav-item px-3">
									<NavLink className="nav-link" to="/talles">CATEGORÍA</NavLink>
								</li>
								<li className="nav-item px-3">
									<NavLink className="nav-link" to="/categorias">STOKS</NavLink>
								</li>
							</ul>
						</div>
					</div>
					{/* <div className="col-lg-3 col-md-6">
						<div className="footer-box subscribe">
							<h2 className="widget-title">Subscribe</h2>
							<p>Subscribe to our mailing list to get the latest updates.</p>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	)
}

export default Footer