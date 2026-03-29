import styles from "./Sections.module.css";
import { motion } from "framer-motion";

const Sections = () => {
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
        <span className={styles.engTitle}>INTRODUCE</span>
        <span className={styles.korTitle}>멋쟁이사자처럼 가톨릭대학교</span>
        <span className={styles.description}>
          LIKELION은 "누구나 코딩을 배울 수 있다"는 믿음으로 시작된 대학 IT
          동아리입니다.
          <br />
          비전공자부터 전공자까지, 다양한 배경의 학생들이 모여 기술을 배우고
          실제 서비스를 만들어냅니다.
          <br />한 학기 동안의 교육과 프로젝트를 통해 실질적인 개발 역량을
          키우고, 함께 성장하는 경험을 제공합니다.
        </span>
      </motion.div>
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
        <span className={styles.engTitle}>HISTORY</span>
        <span className={styles.korTitle}>연혁</span>
        <div className={styles.historyContainer}>
          <span className={styles.year}>2025</span>
          <span className={styles.historyDes}>
            14기 활동 시작 · 누적 멤버 500명 돌파
          </span>
          <span className={styles.year}>2024</span>
          <span className={styles.historyDes}>
            13기 · 해커톤 대상 수상 · 동아리 연합 행사 주최
          </span>
          <span className={styles.year}>2023</span>
          <span className={styles.historyDes}>
            12기 · 프로젝트 10개 런칭 · 기업 협업 시작
          </span>
          <span className={styles.year}>2022</span>
          <span className={styles.historyDes}>
            11기 · 정식 동아리 등록 · 첫 데모데이 개최
          </span>
        </div>
      </motion.div>
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
        <span className={styles.engTitle}>STRUCTURE</span>
        <span className={styles.korTitle}>연간 활동 흐름</span>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <span className={styles.num}>01</span>
            <span className={styles.boxTitle}>모집</span>
            <span className={styles.boxDes}>서류 · 면접</span>
          </div>
          <div className={styles.box}>
            <span className={styles.num}>02</span>
            <span className={styles.boxTitle}>교육</span>
            <span className={styles.boxDes}>트랙 · 공통 세션</span>
          </div>
          <div className={styles.box}>
            <span className={styles.num}>03</span>
            <span className={styles.boxTitle}>프로젝트</span>
            <span className={styles.boxDes}>팀 빌딩 · 개발</span>
          </div>
          <div className={styles.box}>
            <span className={styles.num}>04</span>
            <span className={styles.boxTitle}>수료</span>
            <span className={styles.boxDes}>데모데이 · 수료식</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sections;
