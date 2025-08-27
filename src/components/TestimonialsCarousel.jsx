import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialsCarousel.css";

const testimonials = [
  {
    id: 123,
    abbr: "JW",
    author: "John T. Ajala",
    title: "Managing Director, Swift",
    text: "Their design for our corporate headquarters was a game-changer. It perfectly captures our brand's essence.",
  },
  {
    id: 456,
    abbr: "SW",
    author: "Sarah W",
    title: "Managing Director, Swift",
    text: "Architectura transformed our vision into a reality. The team's professionalism and creativity were exceptional",
  },
];

// Duplicate to make 6 slides
const slides = [
  ...Array(3).fill(testimonials[0]),
  ...Array(3).fill(testimonials[1]),
];

export default function TestimonialsCarousel() {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">What Our<br></br> Customers Say</h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((t, index) => (
          <SwiperSlide key={t.id + "-" + index}>
            <div className="testimonial-card">
              <div className="testimonial-abbr">{t.abbr}</div>
              <p className="testimonial-text">“{t.text}”</p>
              <h4 className="testimonial-author">{t.author}</h4>
              <p className="testimonial-title-small">{t.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
