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
          <a 
            href="https://www.instagram.com/bella_cat233/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-pink-400 hover:text-pink-500 transition-colors duration-300 mb-6 font-bubblegum"
          >
            <span className="flex items-center justify-center gap-2">
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow me @bella_cat233
            </span>
          </a>
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
