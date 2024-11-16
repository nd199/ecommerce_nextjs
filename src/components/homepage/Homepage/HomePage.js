import Image from "next/image";
import styles from "./homePage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/websiteImages");
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setImages(data);
      } catch (e) {
        console.error("Error fetching images");
      }
    };
    fetchImages();
  }, []);

  return (
    <div className={styles.homePage}>
      <div className={styles.homePageLeft}>
        <div className={styles.hmLeftDesc}>
          <div className={styles.heading}>
            FIND CLOTHES THAT MATCH YOUR STYLE
          </div>
          <p className={styles.paraG}>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className={styles.shop}>Shop Now</button>
          <div className={styles.info}>
            <div>
              <p className={styles.numbers}>200+</p> International Brands
            </div>
            <div className={styles.line}></div>

            <div>
              <p className={styles.numbers}>2000+</p> High-Quality Products
            </div>
            <div className={styles.line2}></div>

            <div>
              <p className={styles.numbers}>30000+</p> Happy Customers
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homePageRight}>
        <Image
          src={"/images/twinkle.png"}
          alt="twinkle"
          className={styles.twinkle1}
          width={100}
          height={100}
        />
        <Image
          src={"/images/twinkle.png"}
          alt="twinkle"
          className={styles.twinkle2}
          width={200}
          height={200}
        />
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
        >
          {images.map((img, index) => {
            return (
              <SwiperSlide className={styles.box} key={index}>
                <Image
                  src={img.imageUrl}
                  alt="family"
                  className={styles.family}
                  width={2000}
                  height={2000}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
