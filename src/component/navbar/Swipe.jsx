

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import './navbar.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swipe = () => {
  return (
    <div className='container-swiper'>
     
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
          src="https://img.freepik.com/foto-gratis/joven-mujer-musculosa-practicando-gimnasio_155003-35523.jpg?w=1380&t=st=1700050486~exp=1700051086~hmac=9238082df6edfd52d192878967b55b1d19ae2baf56f6be742fdf98864dbd4cf5"
          alt=""
          
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://img.freepik.com/foto-gratis/entrenador-ayudando-principiantes-gimnasio_23-2149561907.jpg?w=1380&t=st=1700050530~exp=1700051130~hmac=2c655204ab4c67dc7847709eb65cd800e012e064efddf9ead1580141a04fca6d"
          alt=""
          
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://img.freepik.com/foto-gratis/mancuernas-fitness_335224-876.jpg?w=1380&t=st=1700049335~exp=1700049935~hmac=abab16623258d820ecfc2275ecd4e944d4fec86b33681e5bb7492a34d87becba" 
          
          alt=""
          
        />
      </SwiperSlide>
      {/* Agrega más imágenes según sea necesario */}
    </Swiper>
    
    </div>
  );
};

export default Swipe;


