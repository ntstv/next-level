import React from 'react';
import C from 'react-responsive-carousel';
import Component from '../i-component/i-component';

let Carousel = C.Carousel;

export default class MyCarousel extends Component {
    render() {
        return (
        <Carousel showArrows={true}>
          <div>
               <img src="http://lorempixel.com/1000/600/nature/1/" />
               <p className="legend">Legend 1</p>
           </div>
           <div>
               <img src="http://lorempixel.com/1000/600/nature/2/" />
               <p className="legend">Legend 2</p>
           </div>
           <div>
               <img src="http://lorempixel.com/1000/600/nature/3/" />
               <p className="legend">Legend 3</p>
           </div>
           <div>
               <img src="http://lorempixel.com/1000/600/nature/4/" />
               <p className="legend">Legend 4</p>
           </div>
        </Carousel>);
    }
}
