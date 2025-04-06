import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='hero-section'>

            <footer className="">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                            <div className="subscribe-form-wrap">
                                <h6>Lema Sport</h6>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12 mb-4 mb-md-0 mb-lg-0 text-center">
                            <h6 className="site-footer-title mb-3 text-white">Contacto</h6>


                            <div className='d-flex justify-content-center'>
                                <h2><i class="fa-brands fa-instagram px-3 text-white"></i></h2>


                                <h2><i class="fa-brands fa-whatsapp px-3 text-white"></i></h2>
                            </div>


                        </div>

                    </div>
                </div>

                <div className="container pt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-9 col-12">
                            <ul className="site-footer-links">
                                <li className="site-footer-link-item">
                                    <NavLink className="site-footer-link text-white" to="/inicio">Home</NavLink>
                                </li>

                                <li className="site-footer-link-item">
                                    <NavLink className="site-footer-link text-white" to="/categorias">Categorias</NavLink>
                                </li>

                                <li className="site-footer-link-item">
                                    <NavLink className="site-footer-link text-white" to="/preguntas">Preguntas Frecuentes</NavLink>
                                </li>

                                <li className="site-footer-link-item">
                                    <NavLink className="site-footer-link text-white" to="/talles">Talles</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-12">
                            <p className="copyright-text mb-0 text-white">Copyright © 2036 Lema Sport
                                <br />
                                Design: <a rel="nofollow" href="" target="_parent" className='text-white'>Lema23</a>
                                <br />
                                Distribution: <a rel="nofollow" href="" target="_blank" className='text-white'>Lema23</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default Footer