import React from "react";
import './style.css';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Shoe from './components/img/sneakers.png';


export default function Carousel() {
     return(
          <>
          <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
               <section>
                    <div>
                         <p>Melhores ofertas personalizadas</p>
                         <h1>Queima de Estoque Nike</h1>
                         <p>Lorem ipsum dolor sit amet. In similique quia aut adipisci voluptates non quibusdam voluptas sit quaerat velit. </p>
                         <button >Ver Ofertas</button>
                    </div>
                    <div>
                         {/* adicionar imagem */}
                         <img src={Shoe} />
                         <img src="./img/sneakers.png" />
                    </div>
               </section>
               
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>

          
          </>
          );
     }
     
     