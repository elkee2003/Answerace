import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './MediaGrid.css';

const MediaGrid = () => {
    const mediaGallery = [
        "/process1.jpg",
        "/result1.jpg",
        "/result2.jpg",
        "/result3.jpg",
        "/result4.jpg",
        "/result5.jpg",
        "/result5.1.jpg",
        "/result5.2.jpg",
        "/result6.jpg",
        "/result7.jpg",
        "/result8.jpg",
        "/result9.jpg",
        "/process10.jpg",
        "/result10.jpg",
        "/result11.jpg",
        "/result12.jpg",
        "/result13.jpg",
        "/result13.1.jpg",
        "/process14.jpg",
        "/result14.jpg",
        "/result15.jpg",
        "/result16.jpg",
        "/result17.jpg",
        "/result17.1.jpg",
        "/result17.2.jpg",
        "/result17.3.jpg",
        "/result18.jpg",
        "/result19.jpg",
        "/result19.1.jpg",
        "/result19.2.jpg",
        "/result20.jpg",
        "/result20.1.jpg",
        "/result21.jpg",
        "/result21.1.jpg",
        "/result22.jpg",
        "/result23.jpg",
        "/result24.jpg",
        "/process25.jpg",
        "/result25.jpg",
        "/result26.jpg",
        "/result26.1.jpg",
        "/result27.jpg",
        "/result28.jpg",
        "/result28.1.jpg",
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