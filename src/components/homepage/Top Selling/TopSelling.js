import React, { useEffect, useState } from "react";
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
import styles from "./topselling.module.css";
import Image from "next/image";
import Link from "next/link";
import { StarRating } from "@/components/StarRating";

const TopSelling = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const fetchTopSelling = async () => {
      try {
        const response = await fetch("/api/clothes?category=topSelling");
        if (!response.ok) {
          throw new Error("Failed to fetch clothes");
        }
        const data = await response.json();
        setClothes(data);
      } catch (error) {
        console.error("Error fetching clothes:", error);
      }
    };
    fetchTopSelling();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h1>TOP SELLING</h1>
      </div>
      <div className={styles.container}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={60}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
        >
          {clothes.map((clothe, index) => {
            return (
              <SwiperSlide className={styles.box} key={index}>
                <div className={styles.image}>
                  <Image
                    src={clothe.imageUrl}
                    className={styles.boxImage}
                    width={350}
                    height={400}
                    alt={clothe.name}
                  />
                </div>
                <p className={styles.name}>{clothe.name}</p>
                <div className={styles.stars}>
                  <StarRating rating={clothe.rating} />
                  <span className={styles.rating}>
                    <span className={styles.givenRating}>{clothe.rating}</span>
                    /5
                  </span>
                </div>
                {clothe.discount ? (
                  <div className={styles.priceAndDiscount}>
                    <span className={styles.afterDiscount}>
                      {clothe.price - (clothe.price * clothe.discount) / 100}
                    </span>
                    <span className={styles.priceWithDiscount}>
                      ₹{clothe.price}
                    </span>
                    <span className={styles.discount}>-{clothe.discount}%</span>
                  </div>
                ) : (
                  <div className={styles.priceAndDiscount}>
                    <span className={styles.price}>₹{clothe.price}</span>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Link href="/category">
        <button className={styles.ViewMore}> View More </button>
      </Link>
    </div>
  );
};

export default TopSelling;
