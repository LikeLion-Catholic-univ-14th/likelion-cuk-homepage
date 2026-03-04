import styles from "./Section.module.css";

const Sections = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <span className={styles.engTitle}>PROJECTS</span>
        <span className={styles.korTitle}>프로젝트 아카이브</span>
        <span className={styles.chip}>14기</span>
      </div>
      <div className={styles.section2}>
        <span className={styles.description}>
          올해 채워나갈 공간입니다.
        </span>
      </div>
    </div>
  );
};

export default Sections;
