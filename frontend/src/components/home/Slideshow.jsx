import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Slideshow() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 3000 }}
      loop
      className="mySwiper"
    >
      <SwiperSlide>
      
        <div className="slider-item" style={{ backgroundImage: "url(images/bg_1.jpg)", height: "550px"}}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text justify-content-center pt-5">
              <div className="col-md-8 col-sm-12 text-center p-5">
                <span className="subheading ">Welcome</span>
                <h1 className="mb-4 mt-4">The Best Coffee Testing Experience</h1>
                <p className="mb-4 mb-md-5">
                  A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </p>
                <p>
                  <a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a>{" "}
                  <a href="#" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </SwiperSlide>

      <SwiperSlide>
        <div className="slider-item" style={{ backgroundImage: "url(images/bg_3.jpg)", height: "550px" }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text justify-content-center pt-5">
              <div className="col-md-8 col-sm-12 text-center p-5">
                <span className="subheading ">Welcome</span>
                <h1 className="mb-4 mt-4">Amazing Taste &amp; Beautiful Place</h1>
                <p className="mb-4 mb-md-5">
                  A small river named Duden flows by their place and supplies it with the necessary regelialia.
                </p>
                <p>
                  <a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a>{" "}
                  <a href="#" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
