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
            <MailOutline style={{ color: "#777" }} />
            <input
              type="email"
              placeholder="Enter your email address"
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
              <ul className={styles.socialIcons}>
                <li className={styles.socialIcon}>
                  <Image
                    src="/images/social/github.png"
                    width={30}
                    height={30}
                    alt="facebook"
                  />
                </li>
                <li className={styles.socialIcon}>
                  <Image
                    src="/images/social/instagram.png"
                    width={30}
                    height={30}
                    alt="instagram"
                  />
                </li>
                <li className={styles.socialIcon}>
                  <Image
                    src="/images/social/twitter.png"
                    width={30}
                    height={30}
                    alt="twitter"
                  />
                </li>
                <li className={styles.socialIcon}>
                  <Image
                    src="/images/social/linkedin.png"
                    width={30}
                    height={30}
                    alt="linkedin"
                  />
                </li>
                <li className={styles.socialIcon}>
                  <Image
                    src="/images/social/Fb.png"
                    width={30}
                    height={30}
                    alt="linkedin"
                  />
                </li>
                <li className={styles.socialIcon}>
                  <Image
                    src="/images/social/SOverflow.png"
                    width={30}
                    height={30}
                    alt="linkedin"
                  />
                </li>
              </ul>
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
          <ul className={styles.PayIcons}>
            <li>
              <Image
                src={"/images/visa.png"}
                alt={"Visa"}
                width={100}
                height={100}
                className={styles.payment}
              />
            </li>
            <li>
              <Image
                src={"/images/mastercard.svg"}
                alt={"MasterCard"}
                width={100}
                height={100}
                className={styles.payment}
              />
            </li>
            <li>
              <Image
                src={"/images/apple-pay.png"}
                alt={"ApplePay"}
                width={100}
                height={100}
                className={styles.payment}
              />
            </li>
            <li>
              <Image
                src={"/images/google-pay.png"}
                alt={"GooglePay"}
                width={100}
                height={100}
                className={styles.payment}
              />
            </li>
            <li>
              <Image
                src={"/images/paypal.png"}
                alt={"PayPal"}
                width={100}
                height={100}
                className={styles.payment}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
