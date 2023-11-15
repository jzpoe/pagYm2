


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Fotosfooter = () => {

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
          src="https://img.freepik.com/foto-gratis/entrenador-ayudando-principiantes-gimnasio_23-2149561915.jpg?t=st=1700052629~exp=1700053229~hmac=807a874d290aa01cc95f58b343c01cc493e79f5cc6a34c9ce870206fd262fa46"
          alt=""
          style={{ width: '100%', height: '500px', objectFit: 'contain' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://img.freepik.com/foto-gratis/entrenador-ayudando-principiantes-gimnasio_23-2149561906.jpg?t=st=1700052629~exp=1700053229~hmac=ecaba9c91c47b5dfbe60a59f2fd9a727c41fbcdbf72b46d5dadafc80227dd06b"
          alt=""
          style={{ width: '100%', height: '500px', objectFit: 'contain' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://img.freepik.com/fotos-premium/entrenador-ayudando-principiantes-gimnasio_23-2149561926.jpg" 
          
          alt=""
          style={{ width: '100%', height: '500px', objectFit: 'contain' }}
        />
      </SwiperSlide>
      {/* Agrega más imágenes según sea necesario */}
    </Swiper>
  );
};

export default Fotosfooter;



