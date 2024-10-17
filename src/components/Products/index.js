import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import Autoplay from 'swiper/modules' for newer Swiper versions
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/autoplay'; // Import Swiper Autoplay styles

export default function Products() {
  return (
    <section className="products" id="products">
      <h1 className="heading">
        our <span>products</span>
      </h1>

      {/* Product Slider */}
      <div className="products-slider slider">
        <Swiper
          loop={true}  // Ensure loop is set as a boolean
          spaceBetween={20}
          autoplay={{ delay: 7500, disableOnInteraction: false }}
          slidesPerView={2}  // Set to show two slides per view by default
          pagination={{ clickable: true }}
          centeredSlides={false}  // Ensure slides aren't centered
          breakpoints={{
            0: {
              slidesPerView: 1,  // For mobile, show 1 slide
            },
            768: {
              slidesPerView: 2,  // For tablet, show 2 slides
            },
            1024: {
              slidesPerView: 3,  // For larger screens, show 3 slides
            },
          }}
          style={{ padding: '1rem' }}
          modules={[Autoplay]}  // Specify the Autoplay module here
        >
          <SwiperSlide>
            <div className="box">
              <img src="image/product1.jpeg" alt="product 1" />
              <h3>Grocery Item</h3>
              <div className="price">$4.99/ -- 10.99/-</div>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <button type="button" className="btn">add to cart</button>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="box">
              <img src="image/product2.webp" alt="product 5" />
              <h3>Grocery Item</h3>
              <div className="price">$4.99/ -- 10.99/-</div>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <button type="button" className="btn">add to cart</button>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="box">
              <img src="image/product3.jpg" alt="product 5" />
              <h3>Grocery Item</h3>
              <div className="price">$4.99/ -- 10.99/-</div>
              <div className="stars">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <button type="button" className="btn">add to cart</button>
            </div>
          </SwiperSlide>
        </Swiper>
        <button type="button" className="btn1">see More</button>
      </div>
    </section>
  );
}
