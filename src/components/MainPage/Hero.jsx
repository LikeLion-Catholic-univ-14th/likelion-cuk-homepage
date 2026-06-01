import styles from "./Hero.module.css";
import FadeUp from "../FadeUp";
import { useState, useEffect } from "react";
import hero1 from "../../assets/260601_hero.JPG";
import hero2 from "../../assets/260330_hero.JPG";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <FadeUp className={styles.hero}>
      <div
        className={`${styles.bgImage} ${currentImage === 0 ? styles.active : ""}`}
        style={{ backgroundImage: `url(${hero1})` }}
      />
      <div
        className={`${styles.bgImage} ${currentImage === 1 ? styles.active : ""}`}
        style={{ backgroundImage: `url(${hero2})` }}
      />

      <div className={styles.heroWrapper}>
        <div className={styles.textContainer}>
          <p className={styles.schoolName}>LIKELION CUK UNIV.</p>
          <span className={styles.title}>
            당신의 상상
            <br />
            세상 밖으로
          </span>
          <p className={styles.description}>POSSIBILITY TO REALITY</p>
        </div>
      </div>
    </FadeUp>
  );
};

export default Hero;
