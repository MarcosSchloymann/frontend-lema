import React from 'react'
import NavBar from '../components/NavBar'


const Header = () => {
  return (
    <div className='hero-section'>

      <NavBar />

        <div className="container">
          <div className="row">

            <div className="col-lg-12 col-12">
              <div className="text-center mb-5">
                <h1 className="text-white">Lema Sport</h1>
                <p className="text-white">Indumentaria Deportiva Personalizada.</p>
              </div>

            </div>


          </div>
        </div>
    </div>
  )
}

export default Header