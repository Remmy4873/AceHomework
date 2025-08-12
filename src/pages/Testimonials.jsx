import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Emily Rodriguez",
    review: "Working full-time while pursuing my MBA was overwhelming. AceHomework completed my business case studies flawlessly, helping me maintain a 4.0 GPA despite my busy schedule.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    university: "University of Michigan"
  },
  {
    id: 2,
    name: "James Chen",
    review: "The research paper AceHomework delivered was impeccable - properly cited, well-structured, and exactly what my professor wanted. Saved me 20+ hours of work during finals week.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    university: "NYU"
  },
  {
    id: 3,
    name: "Sophia Williams",
    review: "As a single mom with two jobs, I had zero time for my online chemistry assignments. AceHomework handled them all with perfect accuracy - got A's on every single one!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    university: "UC Berkeley"
  },
  {
    id: 4,
    name: "Daniel Kim",
    review: "The programming assignments AceHomework completed for my CS courses were better than what I could have done myself. Perfect code with detailed comments explaining everything.",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    university: "Georgia Tech"
  },
  {
    id: 5,
    name: "Aisha Johnson",
    review: "When I fell behind in my literature course, AceHomework wrote all my analysis essays. Not only were they delivered on time, but they were so good my professor used one as a class example!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    university: "Howard University"
  },
  {
    id: 6,
    name: "Ryan Patel",
    review: "AceHomework saved my medical school application by writing my personal statement. It was so compelling I got interviews at all my top choice schools!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    university: "Johns Hopkins"
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-component">
      <div className="testimonial-container">
        {/* Custom Left Arrow */}
        <div className="custom-prev">
          <FaArrowLeft />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
                <div className="testimonial-image-container">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.review}"</p>
                  <div className="testimonial-author">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-university">{testimonial.university}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Right Arrow */}
        <div className="custom-next">
          <FaArrowRight />
        </div>

        {/* Pagination Dots */}
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Testimonials;