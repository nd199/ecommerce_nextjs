import Image from "next/image";
import styles from "./homePage.module.css";

const HomePage = () => {
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
        <Image
          src={"/images/Cnio.png"}
          alt="family"
          className={styles.family}
          width={800}
          height={600}
        />
      </div>
    </div>
  );
};

export default HomePage;