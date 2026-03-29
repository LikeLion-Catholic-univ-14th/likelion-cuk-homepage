import styles from "./Section.module.css";
import { motion } from "framer-motion";

const Section = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.section}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          y: { duration: 0.7 },
        }}
      >
        <span className={styles.engTitle}>PROJECTS</span>
        <span className={styles.korTitle}>프로젝트 아카이브</span>
        <span className={styles.chip}>14기</span>
      </motion.div>
      <motion.div
        className={styles.section2}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          y: { duration: 0.7 },
        }}
      >
        <span className={styles.description}>올해 채워나갈 공간입니다.</span>
      </motion.div>
    </div>
  );
};

export default Section;
