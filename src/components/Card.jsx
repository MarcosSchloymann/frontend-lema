import React from 'react'

const Card = () => {
  return (
    <div className="col-lg-6 col-12 mb-4 mb-lg-0">
    <div className="custom-block d-flex">
        <div className="">
            <div className="custom-block-icon-wrap">
                <div className="section-overlay"></div>
                <a href="detail-page.html" className="custom-block-image-wrap">
                    <img src="images/podcast/11683425_4790593.jpg"
                        className="custom-block-image img-fluid" alt="img"/>

                    <a href="#" className="custom-block-icon">
                        <i className="bi-play-fill"></i>
                    </a>
                </a>
            </div>

            <div className="mt-2">
                <a href="#" className="btn custom-btn">
                    Camisetas
                </a>
            </div>
        </div>

        <div className="custom-block-info">
            <div className="custom-block-top d-flex mb-1">
                <small className="me-4">
                    <i className="bi-clock-fill custom-icon"></i>
                    50 Minutes
                </small>

                <small>Episode <span className="badge">15</span></small>
            </div>

            <h5 className="mb-2">
                <a href="detail-page.html">
                    Modern Vintage
                </a>
            </h5>

            <div className="profile-block d-flex">
                <img src="images/profile/woman-posing-black-dress-medium-shot.jpg"
                    className="profile-block-image img-fluid" alt="img"/>

                <p>
                    Elsa
                    <img src="images/verified.png" className="verified-image img-fluid" alt="img"/>
                    <strong>Influencer</strong>
                </p>
            </div>

            <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>

            <div className="custom-block-bottom d-flex justify-content-between mt-3">
                <a href="#" className="bi-headphones me-1">
                    <span>120k</span>
                </a>

                <a href="#" className="bi-heart me-1">
                    <span>42.5k</span>
                </a>

                <a href="#" className="bi-chat me-1">
                    <span>11k</span>
                </a>

                <a href="#" className="bi-download">
                    <span>50k</span>
                </a>
            </div>
        </div>

        <div className="d-flex flex-column ms-auto">
            <a href="#" className="badge ms-auto">
                <i className="bi-heart"></i>
            </a>

            <a href="#" className="badge ms-auto">
                <i className="bi-bookmark"></i>
            </a>
        </div>
    </div>
</div>
  )
}

export default Card