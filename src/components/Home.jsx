import { useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleBooking = () => {
    navigate("/booking");
  };

  return (
    <>
      <section className="home-container">
      <img src="./imgs/travel5.jpg" alt="Travel 5" className="hero-img" />
        <div className="hero-text" data-aos="fade-up">
          <h1>Discover Your Next Adventure</h1>
          <p>Book flights, hotels, and experiences around the world</p>
          <button className="hero-btn" onClick={handleBooking}>
            Start Booking
          </button>
        </div>
      </section>

      {/* Section 2 - Services */}
      <section className="section2" data-aos="fade-up">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="bi bi-geo-fill"></i>
            <h3>Destinations</h3>
            <p>Explore the best destinations curated for you.</p>
          </div>
          <div className="service-card">
            <i className="bi bi-airplane"></i>
            <h3>Flights</h3>
            <p>Book flights at competitive prices.</p>
          </div>
          <div className="service-card">
            <i className="bi bi-building"></i>
            <h3>Hotels</h3>
            <p>Find the best accommodations easily.</p>
          </div>
        </div>
      </section>

      {/* Section 3 - Swiper */}
      <section className="section3" data-aos="fade-up">
        <h2>Popular Packages</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <img src="./imgs/travel1.jpg" alt="Beach paradise" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./imgs/travel2.jpg" alt="Mountain adventure" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./imgs/travel3.jpg" alt="City lights" />
          </SwiperSlide>
        </Swiper>
      </section>
      {/** About Us */}
     <section className="section4" data-aos="fade-up">
      <div className="about-container">
          <img src="./imgs/img2.jpg" alt="About us" />
          <div className="about-content">
<h2>About Tourista</h2>
          <p>
            We are passionate about making your travel dreams come true.From exotic destinations to tailored packages, our mission is to offer unforgettable experiences with comfort and affordability.
          </p>
          <button className="about-btn" onClick={handleBooking}>Learn More</button>
          </div>
          
      </div>
     </section>
     {/** Testimonials */}
     <section className="section5" data-aos="fade-up">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial">
          <p>
            "Tourista made my honeymoon unforgettable! Everything was so easy and smooth."
          </p>
          <span>- Sarah L-</span>
        </div>
          <div className="testimonial">
          <p>
            " Best travel agency ever! They found me the cheapest flights and best hotels."
          </p>
          <span>- Marco R-</span>
        </div>
          <div className="testimonial">
          <p>
            "The service is amazing, staff are super helpful and packages are incredible."
          </p>
          <span>- Julia P -</span>
        </div>

      </div>
     </section>
     {/** Call to Action */}
     <section className="section6" data-aos="fade-up">
      <div className="cta-box">
        <h2>Ready for Your Next Adventure?</h2>
        <p>Book now and start exploring the world today!</p>
        <button className="hero-btn" onClick={handleBooking}>
          Book Now
        </button>
      </div>
     </section>
    
    </>
  );
};

export default Home;
