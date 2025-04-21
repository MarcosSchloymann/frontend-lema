import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
	return (
		<div className="footer-area bg-dark text-danger">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="footer-box about-widget">
							<h2 className="widget-title">About us</h2>
							<p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="footer-box get-in-touch">
							<h2 className="widget-title">Get in Touch</h2>
							<ul>
								<li>34/8, East Hukupara, Gifirtok, Sadan.</li>
								<li>support@fruitkha.com</li>
								<li>+00 111 222 3333</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="footer-box pages">
							<h2 className="widget-title">Pages</h2>
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
					<div className="col-lg-3 col-md-6">
						<div className="footer-box subscribe">
							<h2 className="widget-title">Subscribe</h2>
							<p>Subscribe to our mailing list to get the latest updates.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer