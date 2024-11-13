import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./newArrivals.module.css";
import Image from "next/image";

const NewArrivals = () => {
  return (
    <div className={styles.page}>
      <div className={styles.title}>
        <h1>NEW ARRIVALS</h1>
      </div>
      <div className={styles.container}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={80}
          slidesPerView="4"
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className={styles.box}>
            <Image
              src={"/images/StripedBoxWhiteBlack.png"}
              className={styles.boxImage}
              width={350}
              height={400}
              alt="whiteBlackStriped"
            />
            <h2>Product Name 1</h2>
            <p>$20.00</p>
          </SwiperSlide>
          <SwiperSlide className={styles.box}>
            <Image
              src={"/images/StripedBoxWhiteBlack.png"}
              className={styles.boxImage}
              width={350}
              height={400}
              alt="whiteBlackStriped"
            />
            <h2>Product Name 2</h2>
            <p>$25.00</p>
          </SwiperSlide>
          <SwiperSlide className={styles.box}>
            <Image
              src={"/images/StripedBoxWhiteBlack.png"}
              className={styles.boxImage}
              width={350}
              height={400}
              alt="whiteBlackStriped"
            />
            <h2>Product Name 3</h2>
            <p>$30.00</p>
          </SwiperSlide>
          <SwiperSlide className={styles.box}>
            <Image
              src={"/images/StripedBoxWhiteBlack.png"}
              className={styles.boxImage}
              width={350}
              height={400}
              alt="whiteBlackStriped"
            />
            <h2>Product Name 4</h2>
            <p>$35.00</p>
          </SwiperSlide>
          <SwiperSlide className={styles.box}>
            <Image
              src={"/images/StripedBoxWhiteBlack.png"}
              className={styles.boxImage}
              width={350}
              height={400}
              alt="whiteBlackStriped"
            />
            <h2>Product Name 5</h2>
            <p>$40.00</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
