import React from 'react'

const Footer = () => {
    return (
        <div className='footer p-5 bg-dark text-white'>

            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <h4>
                            Lema Sports
                        </h4>
                        <span>
                            La mejor indumentaria para tu entrenamiento
                        </span>
                    </div>
                    <div class="col">
                        <h6>
                            &copy; Todos los derechos reservados a <h4>Lema Sports</h4>
                        </h6>

                    </div>
                    <div className="col">
                        <h1>
                            <a href=""><i className="fa-brands fa-instagram px-3 contactar"></i></a>

                            <a href=""><i className="fa-brands fa-whatsapp px-3 contactar"></i></a>
                        </h1>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer