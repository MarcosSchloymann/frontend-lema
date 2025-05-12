import React from 'react'
import NavBar from '../components/NavBar'


const Header = () => {
  return (
    <div className='hero-section hero-area hero-bg'>

      <div className='position-nav'>

        <NavBar />

        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 offset-lg-2 text-center">
                <div className="hero-text">

                  <div className="hero-text py-4">
                    <h1 className="subtitle py-4 text-danger">INDUMENTARIA DEPORTIVA</h1>
                    <h1 className='text-white'>PERSONALIZADA</h1>
                    <div className="btn-header">
                        <a href="https://wa.me/+5493872544368" className='btn btn-dark text-danger' target='_blank'>ESCRIBINOS <i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Header