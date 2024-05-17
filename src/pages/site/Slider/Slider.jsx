import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss'
export default function SimpleSlider() {
  var settings = { 
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  };
  return (
    <Slider {...settings}>
      <div>
      <div className="slider">
        <div className="lefts">
          <h2>Wood & Cloth Sopha</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsam
            facere ad deserunt sit recusandae culpa, consequatur assumenda
            dolores maiores.
          </p>
          <button>Buy NOW!</button>
        </div>
        <div className="rights">
          <img
            src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png.webp"
            alt=""
          />
        </div>
      </div>
      </div>
      <div>
      <div className="slider">
        <div className="lefts">
          <h2>Wood & Cloth Sopha</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsam
            facere ad deserunt sit recusandae culpa, consequatur assumenda
            dolores maiores.
          </p>
          <button>Buy NOW!</button>
        </div>
        <div className="rights">
          <img
            src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png.webp"
            alt=""
          />
        </div>
        </div>
      </div>
      <div>
      <div className="slider">
        <div className="lefts">
          <h2>Wood & Cloth Sopha</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsam
            facere ad deserunt sit recusandae culpa, consequatur assumenda
            dolores maiores.
          </p>
          <button>Buy NOW!</button>
        </div>
        <div className="rights">
          <img
            src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png.webp"
            alt=""
          />
        </div>
      </div>
      </div>
      
    </Slider>
  );
}