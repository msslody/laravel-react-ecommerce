import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PortfolioSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="col-md-6 col-xl-4 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Portfolio Slide</h4>
          <Slider {...settings}>
            <div>
              <img src="admin/images/dashboard/Rectangle.jpg" width={330} alt="Slide 1" />
            </div>
            <div>
              <img src="admin/images/dashboard/Img_5.jpg" width={330}  alt="Slide 2" />
            </div>
            <div>
              <img src="admin/images/dashboard/img_6.jpg" width={330}  alt="Slide 3" />
            </div>
          </Slider>

          <div className="d-flex py-4">
            <div className="preview-list w-100">
              <div className="preview-item p-0">
                <div className="preview-thumbnail">
                  <img src="admin/images/faces/face12.jpg" className="rounded-circle" alt="User" />
                </div>
                <div className="preview-item-content d-flex flex-grow">
                  <div className="flex-grow">
                    <div className="d-flex d-md-block d-xl-flex justify-content-between">
                      <h6 className="preview-subject">CeeCee Bass</h6>
                      <p className="text-muted text-small">4 Hours Ago</p>
                    </div>
                    <p className="text-muted">Well, it seems to be working now.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-muted">Well, it seems to be working now.</p>

          <div className="progress progress-md portfolio-progress">
            <div className="progress-bar bg-success" role="progressbar" style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
