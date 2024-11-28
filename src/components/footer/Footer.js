import Image from "next/image";
import styles from "./footer.module.css";
import { MailOutline } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.infoTop}>
        <div className={styles.infoLeft}>
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </div>
        <div className={styles.infoRight}>
          <div className={styles.infoRightTop}>
            <MailOutline style={{ color: "#777" }} className={styles.mail} />
            <input
              type="email"
              placeholder="Email address"
              className={styles.input}
            />
          </div>
          <button className={styles.button}>Subscribe</button>
        </div>
      </div>
      <div className={styles.footerMain}>
        <div className={styles.footerMainLeft}>
          <div className={styles.footerMainLeftTop}>
            <h2 className={styles.logo}>CN.io</h2>
            <p className={styles.description}>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
          </div>
          <div className={styles.footerMainLeftBottom}>
            <div className={styles.footerMainLeftBottomLeft}>
              <div className={styles.socialIcons}>
                <div className={styles.socialIcon}>
                  <Image
                    src="/images/social/github.png"
                    width={50}
                    height={30}
                    alt="facebook"
                    className={styles.socialIconImg}
                  />
                </div>
                <div className={styles.socialIcon}>
                  <Image
                    src="/images/social/instagram.png"
                    width={50}
                    height={30}
                    alt="instagram"
                    className={styles.socialIconImg}
                  />
                </div>
                <div className={styles.socialIcon}>
                  <Image
                    src="/images/social/twitter.png"
                    width={50}
                    height={30}
                    alt="twitter"
                    className={styles.socialIconImg}
                  />
                </div>
                <div className={styles.socialIcon}>
                  <Image
                    src="/images/social/linkedin.png"
                    width={50}
                    height={30}
                    alt="linkedin"
                    className={styles.socialIconImg}
                  />
                </div>
                <div className={styles.socialIcon}>
                  <Image
                    src="/images/social/Fb.png"
                    width={50}
                    height={30}
                    alt="linkedin"
                    className={styles.socialIconImg}
                  />
                </div>
                <div className={styles.socialIcon}>
                  <Image
                    src="/images/social/SOverflow.png"
                    width={30}
                    height={30}
                    alt="linkedin"
                    className={styles.socialIconImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerMainRight}>
          <div className={styles.footerMainRightTop}>
            <div className={styles.columns}>
              <h6>COMPANY</h6>
              <ul>
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Partners</li>
              </ul>
            </div>
            <div className={styles.columns}>
              <h6>HELP</h6>
              <ul>
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className={styles.columns}>
              <h6>FAQ</h6>
              <ul>
                <li>Account</li>
                <li>Manage Delivery</li>
                <li>Payment</li>
                <li>Orders</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.infoBottom}>
        <div className={styles.infoBottomLeft}>
          CN.io. © 2023 All rights reserved.
        </div>
        <div className={styles.infoBottomRight}>
          <div>
            <Image
              src={"/images/visa.png"}
              alt={"Visa"}
              width={100}
              height={100}
              className={styles.payment}
            />
          </div>
          <div>
            <Image
              src={"/images/mastercard.svg"}
              alt={"MasterCard"}
              width={100}
              height={100}
              className={styles.payment}
            />
          </div>
          <div>
            <Image
              src={"/images/apple-pay.png"}
              alt={"ApplePay"}
              width={100}
              height={100}
              className={styles.payment}
            />
          </div>
          <div>
            <Image
              src={"/images/google-pay.png"}
              alt={"GooglePay"}
              width={100}
              height={100}
              className={styles.payment}
            />
          </div>
          <div>
            <Image
              src={"/images/paypal.png"}
              alt={"PayPal"}
              width={100}
              height={100}
              className={styles.payment}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
