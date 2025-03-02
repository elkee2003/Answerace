import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import './Gallery.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Gallery = () => {
  const mediaGallery = [
    "/result4.jpg",
    "/result9.jpg",
    "/result5.jpg",
    "/result6.jpg",
  ]
  const [isSwiperReady, setIsSwiperReady] = useState(false); 
  const navigate = useNavigate();

  // Set isSwiperReady to true after component mounts
  useEffect(() => {
    if (mediaGallery.length > 0) {
      setIsSwiperReady(true);
    }
  }, []);


  return (
    <div className="galleryContainer">
      <div onClick={() => navigate(-1)} className="backIconContainer">
        <IoArrowBack />
      </div>
      {isSwiperReady ? (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="swiper"
        >
          {mediaGallery.map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url || DefaultImage}
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