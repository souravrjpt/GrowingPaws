import React from 'react';
import { i1 } from '../images';

import { Section1 } from '../../cssfiles/section1.css';

export default function SectionOne() {
  return (
    <>
      <section class='wrapper' style={{height:'10rem'}}>
        <div class='container' >
          <div class='row' >
            
            <div class='col-sm-12 col-md-4 col-lg-4' >
              <div class='card text-dark card-has-bg click-col '>
                <img id='first' class='card-img d-none' />
                <div id='card1' class='card-img-overlay d-flex flex-column'>
                  <div class='card-body'>
                    <h2 class='card-title mt-0'>RENT A PET</h2>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-sm-12 col-md-6 col-lg-4 mb-4'>
              <div class='card text-dark card-has-bg click-col'>
                <img
                  class='card-img d-none'
                  alt='Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?'
                />
                <div id='card2' class='card-img-overlay d-flex flex-column'>
                  <div class='card-body'>
                    <h2 class='card-title mt-0'>RENT A PET</h2>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-sm-12 col-md-6 col-lg-4 mb-4'>
              <div class='card text-dark card-has-bg click-col'>
                <img
                  class='card-img d-none'
                  alt='Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?'
                />
                <div id='card3' class='card-img-overlay d-flex flex-column'>
                  <div class='card-body'>
                    <h2 class='card-title mt-0'>RENT A PET</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
