import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/free-mode';

const categories = [
  { title: "Makeup", image: "/images/makeup.jpg", path: "/makeup" },
  { title: "Skincare", image: "/images/skincare.jpg", path: "/skincare" },
  { title: "Haircare", image: "/images/haircare.jpg", path: "/haircare" },
  { title: "Women's Fashion", image: "/images/women-fashion.jpg", path: "/women" },
  { title: "Men's Fashion", image: "/images/men-fashion.jpg", path: "/men" },
  { title: "Accessories", image: "/images/accessories.jpg", path: "/accessories" },
  { title: "Body Care", image: "/images/bodycare.jpg", path: "/bodycare" },
  { title: "Fragrance", image: "/images/perfume.jpg", path: "/fragrance" },
];

const BeautySlider = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-10 px-4 sm:px-6 lg:px-8 rounded-3xl shadow">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore Beauty & Fashion
          </h2>
          <button
            onClick={() => navigate('/categories')}
            className="text-pink-600 hover:text-pink-700 text-sm font-medium hover:underline"
          >
            View All Categories →
          </button>
        </div>

        {/* ✅ Only this div should be scrollable horizontally */}
        <div className="overflow-x-auto">
          <div className="min-w-[600px] max-w-full">
            <Swiper
              slidesPerView="auto"
              spaceBetween={16}
              freeMode={true}
              modules={[FreeMode]}
              className="w-full"
            >
              {categories.map((item, index) => (
                <SwiperSlide
                  key={index}
                  style={{ width: '220px' }}
                  className="rounded-xl overflow-hidden shadow group hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(item.path)}
                >
                  <div className="relative w-full h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-base font-semibold text-gray-800 truncate">
                      {item.title}
                    </h3>
                    <p className="text-sm text-pink-500 mt-1 hover:underline">Shop Now →</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautySlider;
