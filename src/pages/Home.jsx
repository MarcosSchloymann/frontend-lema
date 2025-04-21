import React from 'react'
import Card from '../components/Card'

const Home = () => {
  return (
    <>

      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3><span className="orange-text">Nuestros</span> Productos</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
              </div>
            </div>
          </div>

          <div className="row">

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />


          </div>
        </div>
      </div>

      {/* <Carrousel/> */}


    </>
  )
}

export default Home