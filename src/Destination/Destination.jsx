// Destination.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./destination.module.css";

// Dati delle destinazioni
const destinations = [
  { id: 1, name: "Japan", imageUrl: "/imgs/japan.jpg" },
  { id: 2, name: "Indonesia", imageUrl: "/imgs/indonesia.jpg" },
  { id: 3, name: "Egypt", imageUrl: "/imgs/egypt2.jpg" },
  { id: 4, name: "Canada", imageUrl: "/imgs/canada.jpg" },
  { id: 5, name: "India", imageUrl: "/imgs/india2.jpg" },
  { id: 6, name: "America", imageUrl: "/imgs/america.jpg" },
  { id: 7, name: "Switzerland", imageUrl: "/imgs/switzerland.jpg" },
  { id: 8, name: "Hongkong", imageUrl: "/imgs/hongkong.jpg" },
  { id: 9, name: "Mexico", imageUrl: "/imgs/mexico.jpg" },
  { id: 10, name: "Dubai", imageUrl: "/imgs/dubai.jpg" },
  { id: 11, name: "Thailand", imageUrl: "/imgs/thailand.jpg" },
  { id: 12, name: "Bangladesh", imageUrl: "/imgs/bangladesh.jpg" },
];

const ITEMS_PER_PAGE = 6;

const Destination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const indexOfLast = currentPage * ITEMS_PER_PAGE;
  const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;
  const currentDestinations = destinations.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(destinations.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // scroll verso l’inizio del componente (opzionale)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBooking = (destination) => {
    // Potresti passare l’id o il nome come stato o parametro
    navigate("/booking", { state: { destination } });
  };

  return (
    <section className={styles.container}>
      <section className={styles.heroSection}>
        <img
          className={styles.heroImage}
          src="/imgs/desti.jpg"
          alt="Hero destination"
        />
        <div className={styles.heroText}>
          <h1 className={styles.title}>Destination</h1>
          <p className={styles.subtitle}>
            Showcase your destination offers with the all-encompassing
            destination lists that contains all the amazing places your
            customers can visit.
          </p>
        </div>
      </section>

      <section className={styles.destinationsSection}>
        <h1 className={styles.sectionTitle}>Explore All Destinations</h1>
        <div className={styles.grid}>
          {currentDestinations.map((dest) => (
            <div
              key={dest.id}
              className={styles.card}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div className={styles.imageWrapper}>
                <img
                  src={dest.imageUrl}
                  alt={dest.name}
                  onError={(e) => {
                    e.target.src = "/imgs/placeholder.jpg";
                  }}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.destName}>{dest.name}</h3>
                <button
                  className={styles.bookingButton}
                  onClick={() => handleBooking(dest)}
                >
                  Booking now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.pagination}>
          <button
            className={styles.navButton}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo; Prev
          </button>
          {[...Array(totalPages)].map((_, idx) => {
            const page = idx + 1;
            return (
              <button
                key={page}
                className={
                  page === currentPage
                    ? `${styles.pageButton} ${styles.active}`
                    : styles.pageButton
                }
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            );
          })}
          <button
            className={styles.navButton}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next &raquo;
          </button>
        </div>
      </section>
    </section>
  );
};

export default Destination;
