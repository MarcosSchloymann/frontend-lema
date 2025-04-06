import React from 'react'
import ImgCarr from '../../public/img/logo-nav.jpg'

const Carrousel = () => {
    return (
        <div className="owl-carousel owl-theme">
            <div className="owl-carousel-info-wrap item">

               
                <img src={ImgCarr}
                                    className="owl-carousel-image img-fluid" alt=""/>

                                <div className="owl-carousel-info">
                                    <h4 className="mb-2">
                                        Candice
                                        <img src={ImgCarr} className="owl-carousel-verified-image img-fluid"
                                            alt=""/>
                                    </h4>

                                    <span className="badge">Storytelling</span>

                                    <span className="badge">Business</span>
                                </div>

                                <div className="social-share">
                                    <ul className="social-icon">
                                        <li className="social-icon-item">
                                            <a href="#" className="social-icon-link bi-twitter"></a>
                                        </li>

                                        <li className="social-icon-item">
                                            <a href="#" className="social-icon-link bi-facebook"></a>
                                        </li>
                                    </ul>
                                </div>
            </div>
            

        </div>
    )
}

export default Carrousel