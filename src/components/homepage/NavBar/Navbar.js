"use client";
import {
  ArrowDropDownOutlined,
  Person4Outlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styles from "./navBar.module.css";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDropdown(false);
    }, 3000);
    return () => clearInterval(interval);
  }, [dropdown]);

  return (
    <div className={styles.navBar}>
      <div className={styles.navIn}>
        <div className={styles.navInLeft}>
          <div className={styles.logo}>CN.io</div>
          <div className={styles.navLinks}>
            <div className={styles.navLink}>Home</div>
            <div className={styles.navLink}>
              Shop
              <span className={styles.dropdownIcon}>
                <ArrowDropDownOutlined onClick={() => setDropdown(!dropdown)} />
              </span>
              {dropdown && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownLink}>Men</div>
                  <div className={styles.dropdownLink}>Women</div>
                  <div className={styles.dropdownLink}>Kids</div>
                </div>
              )}
            </div>
            <div className={styles.navLink}>AboutUs</div>
            <div className={styles.navLink}>ContactUs</div>
          </div>
        </div>
        <div className={styles.navInRight}>
          <div className={styles.navLink}>
            <div className={styles.searchBar}>
              <div className={styles.searchIcon}>
                <SearchOutlined style={{ color: "#777" }} />
              </div>
              <input
                placeholder="Search"
                className={styles.searchInput}
              ></input>
            </div>
          </div>
          <div className={styles.navLink}>
            <ShoppingCartOutlined />
          </div>
          <div className={styles.navLink}>
            <Person4Outlined />
          </div>
        </div>
      </div>
      {/* for Mobile view */}
      <div className={styles.navMobile}>
        <div className={styles.navMobileLeft}>
          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`${styles.line1} ${menuOpen ? styles.cross1 : ""}`}
            ></div>
            <div
              className={`${styles.line2} ${menuOpen ? styles.cross2 : ""}`}
            ></div>
            <div
              className={`${styles.line3} ${menuOpen ? styles.cross3 : ""}`}
            ></div>
          </div>
          <div className={styles.logo}>CN. io</div>
        </div>
        {menuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.menuItem}>Home</div>
            <div className={styles.menuItem}>Shop</div>
            <div className={styles.menuItem}>About Us</div>
            <div className={styles.menuItem}>Contact Us</div>
          </div>
        )}
        <div className={styles.navMobileRight}>
          <div className={styles.navMobLinksRight}>
            <div className={styles.searchMobIcon}>
              <SearchOutlined
                style={{ fontSize: "30px", fontWeight: "bold" }}
              />
            </div>
            <div className={styles.navLink}>
              <ShoppingCartOutlined
                style={{ fontSize: "30px", fontWeight: "bold" }}
              />
            </div>
            <div className={styles.navLink}>
              <Person4Outlined
                style={{ fontSize: "30px", fontWeight: "bold" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
