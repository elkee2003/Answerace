import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './MediaGrid.css';

const MediaGrid = () => {
    const mediaGallery = [
        "/result4.jpg",
        "/result9.jpg",
        "/result5.jpg",
        "/result6.jpg",
    ]
  const navigate = useNavigate(); 

  return (
    <div 
        id='mediagrid'
        className="gridContainerWrapper"
    >

        <h1 className="primaryText">Gallery</h1>
        <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={3}  // Show 3 images at a time
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3s
            loop={true} // Enable looping
            navigation // Show next/prev arrows
            className="mediaSwiper"
        >
            {/* <div className="gridContainer"> */}
            {mediaGallery.map((pic, index) => (
                <SwiperSlide 
                    className='swipermediaslide' 
                    key={index}
                >
                    <button
                        key={index}
                        onClick={() =>
                            navigate(`/gallery/${index}`, {
                            state: { images: mediaGallery, selectedIndex: index }, // Pass images as state
                            })
                        }
                        className="gridItem"
                    >
                        <div className="mediaImageContainer">
                        <img src={pic} alt={`Gallery ${index}`} className="mediaImage" />
                        </div>
                    </button>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
};

export default MediaGrid;