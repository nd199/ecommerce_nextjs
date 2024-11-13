"use client";
import { Close } from "@mui/icons-material";
import styles from "./page.module.css";
import { useState } from "react";
import NavBar from "@/components/homepage/NavBar/Navbar";
import HomePage from "@/components/homepage/Homepage/HomePage";
import BlackBox from "@/components/homepage/BlackBox/BlackBox";
import NewArrivals from "@/components/homepage/NewArrivals/NewArrivals";

export default function Home() {
  const [cross, showCross] = useState(true);
  return (
    <div className={styles.page}>
      {cross && (
        <div className={styles.notify}>
          <div>Sign up and get 20% off to your first order. Sign Up Now</div>
          <div className={styles.cross} onClick={() => showCross(!cross)}>
            <Close />
          </div>
        </div>
      )}
      <NavBar />
      <HomePage />
      <BlackBox />
      <NewArrivals />
    </div>
  );
}
