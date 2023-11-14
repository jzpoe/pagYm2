// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swipe = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1} // Muestra solo una imagen a la vez
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{ delay: 7000 }}
    >
      <SwiperSlide>
        <img
          src="./src/img/mujer-abdominales-visibles-haciendo-fitness.jpg"
          alt=""
          style={{ width: '100%', height: '500px', objectFit: 'contain' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./src/img/mujer-abdominales-visibles-haciendo-fitness.jpg"
          alt=""
          style={{ width: '100%', height: '500px', objectFit: 'contain' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="./src/img/mujer-abdominales-visibles-haciendo-fitness.jpg" 
          
          alt=""
          style={{ width: '100%', height: '500px', objectFit: 'contain' }}
        />
      </SwiperSlide>
      {/* Agrega más imágenes según sea necesario */}
    </Swiper>
  );
};

export default Swipe;


