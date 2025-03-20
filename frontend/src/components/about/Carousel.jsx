import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Carousel() {
  return (
    <Swiper loop={true} autoplay={{ delay: 3000 }}>
      <SwiperSlide>
        <div className="slider-item justify-content-center align-content-center" style={{ backgroundImage: "url(images/bg_3.jpg)", height:"600px"}}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text justify-content-center align-items-center">
              <div className="col-md-7 col-sm-12 text-center">
                <h1 className="mb-3 mt-5 bread">About Us</h1>
                <p className="breadcrumbs">
                  <span className="mr-2"><a href="/">Home</a></span>
                  <span>About</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
