import React from 'react'
import Card from '../components/Card'

const Home = () => {
  return (
    <>

      <div className="product-section container">
       
          <div className="line-section row d-flex container justify-contents-center align-items-center">
          <div className="col-lg-4 px-5 p-3">
            <Card />
          </div>
          <div className="col-lg-4 px-5 p-3">
            <Card />
          </div>
          <div className="col-lg-4 px-5 p-3">
            <Card />
          </div>

          </div>
       
      </div>

      {/* <Carrousel/> */}


    </>
  )
}

export default Home