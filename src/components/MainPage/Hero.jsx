import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <p className={styles.schoolName}>LIKELION CUK UNIV.</p>
      <span className={styles.title}>
        당신의 상상,
        <br />
        세상 밖으로
      </span>
      <p className={styles.description}>문구문구문구문구</p>
    </div>
  );
};

export default Hero;
