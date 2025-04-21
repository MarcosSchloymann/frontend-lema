import React from 'react'
import Card from '../components/Card'

const Home = () => {
  return (
    <>

      <div className="product-section container">
       
          <div className="line-section row d-flex container justify-content-center align-items-center">
          <div className="col-md-4 p-3 card-space">
            <Card />
          </div>
          <div className="col-md-4 p-3 card-space">
            <Card />
          </div>
          <div className="col-md-4 p-3 card-space">
            <Card />
          </div>

          </div>
       
      </div>

      {/* <Carrousel/> */}


    </>
  )
}

export default Home