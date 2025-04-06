import React from 'react'
import Card from '../components/Card'

const Home = () => {
  return (
    <section className="latest-podcast-section section-padding pb-0" id="section_2">
    <div className="container">
        <div className="row justify-content-center">

            <div className="col-lg-12 col-12">
                <div className="section-title-wrap mb-5">
                    <h4 className="section-title">Diseños y Moldes</h4>
                </div>
            </div>

           <Card/>

        </div>
    </div>
</section>
  )
}

export default Home