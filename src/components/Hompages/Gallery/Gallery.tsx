import { useState, useEffect } from 'react';

import { useNavigate, useLocation, useParams  } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './Gallery.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Gallery = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(Number(id));

  // Get images from location state
  const images = location.state?.images || [];
  const selectedIndex = location.state?.selectedIndex || 0;

  useEffect(() => {
    if (images.length > 0) {
      setCurrentIndex(selectedIndex);
    }
  }, [images, selectedIndex]);
    
  return (
    <div className="galleryContainer">
      <div onClick={() => navigate(-1)} className="backIconContainer">
        <IoArrowBack />
      </div>
      {images.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          initialSlide={currentIndex} // Start from the clicked image
          className="swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Media ${index + 1}`}
                className="galleryImage"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
};

export default Gallery;