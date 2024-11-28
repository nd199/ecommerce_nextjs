import { useEffect, useState } from "react";
import styles from "./ur.module.css";
import { StarRating } from "@/components/StarRating";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import tick from "@/animation/TickMark.json";
import Lottie from "react-lottie";

export const TickMarkOptions = {
  loop: true,
  autoplay: true,
  animationData: tick,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/userReviews");
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h3 className={styles.heading}>OUR CUSTOMER REVIEWS</h3>
        <div className={styles.reviews}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={4}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              375: { slidesPerView: 1 },
              425: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
          >
            {reviews.map((review, index) => {
              return (
                <SwiperSlide className={styles.box} key={index}>
                  <div className={styles.review}>
                    <div className={styles.rating}>
                      <StarRating rating={review.rating} />
                    </div>
                    <div className={styles.user}>
                      <p className={styles.name}>{review.name}.</p>
                      <Lottie
                        options={TickMarkOptions}
                        style={{ width: "30px", height: "30px" }}
                        title="Verified User"
                      />
                    </div>
                    <div className={styles.reviewText}>
                      <p>{review.review}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
