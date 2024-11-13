import {
  Person4Outlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styles from "./navBar.module.css";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className={styles.navBar}>
        <div className={styles.navIn}>
          <div className={styles.navInLeft}>
            <div className={styles.logo}>CN.io</div>
            <div className={styles.navLinks}>
              <div className={styles.navLink}>Home</div>
              <div className={styles.navLink}>Categories</div>
              <div className={styles.navLink}>OnSale</div>
              <div className={styles.navLink}>Brands</div>
            </div>
          </div>
          <div className={styles.navInRight}>
            <div className={styles.searchBar}>
              <div className={styles.searchIcon}>
                <SearchOutlined style={{ color: "#777" }} />
              </div>
              <input
                placeholder="Search"
                className={styles.searchInput}
              ></input>
            </div>
            <div className={styles.navLinks}>
              <div className={styles.navLink}>
                <ShoppingCartOutlined />
              </div>
              <div className={styles.navLink}>
                <Person4Outlined />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;