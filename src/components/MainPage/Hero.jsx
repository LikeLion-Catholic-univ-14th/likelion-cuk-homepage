import styles from "./Hero.module.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className={styles.hero}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        y: { duration: 0.7 },
      }}
    >
      <p className={styles.schoolName}>LIKELION CUK UNIV.</p>
      <span className={styles.title}>
        당신의 상상,
        <br />
        세상 밖으로
      </span>
      <p className={styles.description}>문구문구문구문구</p>
    </motion.div>
  );
};

export default Hero;
