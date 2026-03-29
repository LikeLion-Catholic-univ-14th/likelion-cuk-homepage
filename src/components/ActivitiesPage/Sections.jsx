import styles from "./Sections.module.css";
import { motion } from "framer-motion";

const Sections = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.titleSection}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          y: { duration: 0.7 },
        }}
      >
        <span className={styles.engTitle}>ACTIVITIES</span>
        <span className={styles.korTitle}>우리의 활동</span>
        <span className={styles.description}>
          1년 동안 이런 활동들을 합니다.
        </span>
      </motion.div>

      <motion.div
        className={styles.mobileImageSlider}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          y: { duration: 0.7 },
        }}
      >
        <span>모바일용 이미지 슬라이더 자리</span>
      </motion.div>

      <div className={styles.sectionContainer}>
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
          <span className={styles.num}>01</span>
          <span className={styles.korTitle}>Track Sessions</span>
          <span className={styles.description}>
            기획, 디자인, 프론트엔드, 백엔드 트랙별로 진행되는 스터디
            세션입니다.
            <br />
            매주 실습 과제를 통해 실질적인 개발 역량을 키웁니다.
          </span>
          <div className={styles.listContainer}>
            <li className={styles.list}>주 1회 오프라인 세션</li>
            <li className={styles.list}>트랙별 멘토 배정</li>
            <li className={styles.list}>매주 과제 및 코드 리뷰</li>
          </div>
        </motion.div>
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            y: { duration: 0.7 },
          }}
        ></motion.div>
      </div>

      <div className={styles.sectionContainer2}>
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            y: { duration: 0.7 },
          }}
        ></motion.div>
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
          <span className={styles.num}>02</span>
          <span className={styles.korTitle}>Common Sessions</span>
          <span className={styles.description}>
            트랙에 상관없이 전체 멤버가 함께하는 공통 세션입니다.
            <br />
            문제인식 및 시장분석, UX/UI, 웹의 동작 원리 등 모든 아기사자에게
            필요한 역량을 학습합니다.
          </span>
          <div className={styles.listContainer}>
            <li className={styles.list}>주 1회 오프라인 세션</li>
            <li className={styles.list}>운영진 주도의 공통 주제 학습</li>
            <li className={styles.list}>협업을 위한 필수 역량 강화</li>
          </div>
        </motion.div>
      </div>

      <div className={styles.sectionContainer}>
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
          <span className={styles.num}>03</span>
          <span className={styles.korTitle}>Alumni Networking</span>
          <span className={styles.description}>
            다양한 기수의 아기사자들이 모여 교류하는 네트워킹 세션입니다.
            <br />
            경험을 공유하고 서로의 성장을 응원하는 시간을 가집니다.
          </span>
          <div className={styles.listContainer}>
            <li className={styles.list}>선배 기수의 경험 공유 세션</li>
            <li className={styles.list}>기수 간 자유로운 네트워킹</li>
            <li className={styles.list}>진로 및 개발 고민 이야기</li>
          </div>
        </motion.div>
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            y: { duration: 0.7 },
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Sections;
