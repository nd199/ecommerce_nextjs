import React, { useEffect, useState } from "react";
import styles from "./occ.module.css";
import Image from "next/image";

const Occasion = () => {
  const [occasions, setOccasions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOccasion = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/occasions");
        if (!response.ok) {
          throw new Error("Failed to fetch occasion");
        }
        const data = await response.json();
        setOccasions(data);
      } catch (error) {
        console.error("Error fetching occasion:", error);
      }
    };
    fetchOccasion();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>BROWSE FOR OCCASIONS</h1>
        <div className={styles.grid}>
          {occasions.map((occasion) => {
            return (
              <div className={styles.occasionContainer} key={occasion.id}>
                <div className={styles.occasionCard}>
                  <Image
                    src={occasion.imageUrl}
                    alt="occasion1"
                    className={styles.occasion}
                    width={200}
                    height={200}
                  />
                  <h2 className={styles.occasionTitle}>{occasion.title}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Occasion;
