import React from 'react';
import Reactdom from 'react-dom';
import { i1 } from './images';
// import { CarouselStyle } from '../cssfiles/Carousel.css';

export default function Carousel() {
  return (
    <>
      {/* <h1>hello</h1> */}
      <div
        id='carouselExampleAutoplaying'
        class='carousel slide'
        data-bs-ride='carousel'
        >
        <div class='carousel-inner' style={{height:'43rem'}}>
          <div class='carousel-item active' >
            <img src={i1} class='d-md-block w-100'  />
          </div>
          <div class='carousel-item'>
            <img src={i1} class='d-md-block w-100' />
          </div>
          <div class='carousel-item'>
            <img src={i1} class='d-md-block w-100' />
          </div>
        </div>
        
      </div>
    </>
  );
}
