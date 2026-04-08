import styles from "./Hero.module.css";
import FadeUp from "../FadeUp";

const Hero = () => {
  return (
    <FadeUp className={styles.hero}>
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
