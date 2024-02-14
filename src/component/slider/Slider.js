import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import './owl.css';  
function Slider(props) {
  return (
    <OwlCarousel className='owl-theme' loop margin={0} autoplay={true} autoplaySpeed={1000} dots={false} items={1}>
      {
        props.fullstack.map((ele) => {
          return (
            <div class='item'>
              <img className="img" src={ele.ssliderimg} />
            </div>
          );
        })
      }
    </OwlCarousel>
  );
}

export default Slider;