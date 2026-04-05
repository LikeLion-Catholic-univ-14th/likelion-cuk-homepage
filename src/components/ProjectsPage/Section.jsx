import styles from "./Section.module.css";
import FadeUp from "../FadeUp";

const Section = () => {
  return (
    <div className={styles.container}>
      <FadeUp className={styles.section}>
        <span className={styles.engTitle}>PROJECTS</span>
        <span className={styles.korTitle}>프로젝트 아카이브</span>
        <span className={styles.chip}>14기</span>
      </FadeUp>
      <FadeUp className={styles.section2}>
        <span className={styles.description}>올해 채워나갈 공간입니다.</span>
      </FadeUp>
    </div>
  );
};

export default Section;
