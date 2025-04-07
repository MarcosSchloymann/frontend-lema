import React from 'react'
import LogoImg from '../../public/img/logo-nav.jpg'

const Card = () => {
  return (
    <div className="col-lg-6 col-12 mb-4 mb-lg-4 px-4 px-md-4">
    <div className="custom-block d-flex">
        <div className='col-6 d-flex justify-content-center'>
        <div className="">
            <div className="custom-block-icon-wrap">
                <div className="section-overlay"></div>
                <a href="detail-page.html" className="custom-block-image-wrap">
                    <img src={LogoImg}
                        className="custom-block-image img-fluid" alt="img"/>
                </a>
            </div>

            <div className="mt-2">
                <a href="#" className="btn custom-btn">
                    Camisetas
                </a>
            </div>
            </div>
        </div>

        <div className="custom-block-info col-6 text-center">
            <div className="custom-block-top d-flex mb-1">
                <h5 className="me-4">
                    Mangas Clásicas
                </h5>
            </div>

            <h5 className="mb-2">
                <a href="" className=''>
                    Modelos Personalizados
                </a>
            </h5>

            <div className="profile-block d-flex">
              

                
            </div>

            <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
        </div>
    </div>
</div>
  )
}

export default Card