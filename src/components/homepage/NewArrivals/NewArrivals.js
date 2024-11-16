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
import styles from "./newArrivals.module.css";
import Image from "next/image";
import Link from "next/link";

const NewArrivals = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await fetch("/api/clothes?category=new");
        if (!response.ok) {
          throw new Error("Failed to fetch clothes");
        }
        const data = await response.json();
        setClothes(data);
      } catch (error) {
        console.error("Error fetching clothes:", error);
      }
    };

    fetchNewArrivals();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h1>NEW ARRIVALS</h1>
      </div>
      <div className={styles.container}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={80}
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
                <h2>{clothe.name}</h2>
                <p>${clothe.price}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Link href="/category">
          <button className={styles.ViewMore}> View More </button>
        </Link>
      </div>
    </div>
  );
};

export default NewArrivals;
