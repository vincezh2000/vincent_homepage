// pages/MyCat.jsx
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

function MyCat() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const hasShownAlert = localStorage.getItem('catPageAlertShown');
    if (!hasShownAlert) {
      setShowAlert(true);
      localStorage.setItem('catPageAlertShown', 'true');
    }
  }, []);

  const catPhotos = [
    { image: "/cat1.jpg", description: "First day in her forever home! 🏠" },
    { image: "/cat2.jpg", description: "Sneaky little peek-a-boo! 👀" },
    { image: "/cat3.jpg", description: "My purr-fect debugging assistant! 💻" },
    { image: "/cat4.jpg", description: "Brave little patient at the vet 🏥" },
    { image: "/cat5.jpg", description: "Giving her important cat lecture! 📢" },
    { image: "/cat6.jpg", description: "Just a lazy afternoon... 😴" },
    { image: "/cat7.jpg", description: "Dinner time! Can't wait!! 🍽️" },
    { image: "/cat8.jpg", description: "Her Royal Highness has arrived! 👑" }
  ];

  return (
    <div className="bg-pink-100 min-h-screen pt-20">
      {showAlert && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50
                      bg-pink-100 border-2 border-pink-400 rounded-lg p-4 shadow-lg
                      max-w-sm w-full mx-4 animate-fade-in">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-barrio text-pink-500 text-lg mb-2">Welcome to Bella's Page! 🐱</h3>
              <p className="text-gray-700 font-bubblegum">
                The background brightness will change on this page. Hope you enjoy meeting Bella!
              </p>
            </div>
            <button 
              onClick={() => setShowAlert(false)}
              className="text-pink-400 hover:text-pink-600 ml-4"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-24">
          <div className="relative inline-block mb-12 overflow-hidden rounded-lg">
            <div className="relative max-w-xl mx-auto w-[60%]">
              <img
                src="/bella.png"
                alt="My Cat"
                className="w-full object-contain mx-auto"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1E1E1E]/20"></div> */}
            </div>
          </div>
          <h1 className="font-barrio text-4xl text-center text-pink-400 mb-6 neon-glow">
            Bella
          </h1>
          <p className="text-gray-700 text-center font-bubblegum leading-relaxed max-w-2xl mx-auto text-lg">
            Meet <span className="font-barrio text-pink-400">Bella</span>, my adventurous companion who loves to help me code by walking across my 
            keyboard. Despite her mischievous nature, she's the best rubber duck debugger 
            I could ask for.
          </p>
        </div>

        {/* Enhanced Coverflow Image Slider */}
        <div className="relative mt-16 mb-16 h-[600px] flex flex-col items-center">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={50}
            coverflowEffect={{
              rotate: 35,
              stretch: 0,
              depth: 350,
              modifier: 1.75,
              slideShadows: false
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            navigation={true}
            className="w-full h-[450px]"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
          >
            {catPhotos.map((photo, index) => (
              <SwiperSlide key={index} className="transition-all duration-500">
                <div className="relative group h-full">
                  <div className="h-full flex items-center justify-center">
                    <img
                      src={photo.image}
                      alt={photo.description}
                      className="w-full h-full object-cover rounded-lg transition-all duration-500
                               group-hover:shadow-[0_0_30px_rgba(162,89,255,0.3)]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Description for Active Slide */}
          <div className="mt-8 h-20 flex items-center justify-center">
            <p className="text-gray-700 text-lg font-roboto text-center max-w-2xl
                          transition-opacity duration-500 ease-in-out
                          animate-fade-in">
              {catPhotos[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCat;
