"use client";
import styles from "./page.module.css";
import NavBar from "@/components/homepage/NavBar/Navbar";
import HomePage from "@/components/homepage/Homepage/HomePage";
import BlackBox from "@/components/homepage/BlackBox/BlackBox";
import NewArrivals from "@/components/homepage/NewArrivals/NewArrivals";
import TopSelling from "@/components/homepage/Top Selling/TopSelling";
import Occasion from "@/components/homepage/occasionCategory/Occasion";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomePage />
      <BlackBox />
      <NewArrivals />
      <TopSelling />
      <Occasion />
    </div>
  );
}
