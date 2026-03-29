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
        <span className={styles.engTitle}>ALUMNI INTERVIEWS</span>
        <span className={styles.korTitle}>졸업생이 전하는 이야기</span>
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
        <div className={styles.topRow}>
          <div className={styles.profileImg}></div>
          <div className={styles.nameJob}>
            <span className={styles.name}>홍길동</span>
            <span className={styles.job}>풀스택 개발자</span>
          </div>
        </div>
        <div className={styles.quoteBox}>
          <span className={styles.quote}>
            "멋사에서 처음 코딩을 배웠어요. 비전공자였지만 체계적인 커리큘럼과
            함께한 팀원들 덕분에 성장할 수 있었습니다. 특히 프로젝트 경험이 취업
            면접에서 큰 도움이 됐어요."
          </span>
        </div>
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
        <div className={styles.topRow}>
          <div className={styles.profileImg}></div>
          <div className={styles.nameJob}>
            <span className={styles.name}>홍길동</span>
            <span className={styles.job}>풀스택 개발자</span>
          </div>
        </div>
        <div className={styles.quoteBox}>
          <span className={styles.quote}>
            "멋사에서 처음 코딩을 배웠어요. 비전공자였지만 체계적인 커리큘럼과
            함께한 팀원들 덕분에 성장할 수 있었습니다. 특히 프로젝트 경험이 취업
            면접에서 큰 도움이 됐어요."
          </span>
        </div>
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
        <div className={styles.topRow}>
          <div className={styles.profileImg}></div>
          <div className={styles.nameJob}>
            <span className={styles.name}>홍길동</span>
            <span className={styles.job}>풀스택 개발자</span>
          </div>
        </div>
        <div className={styles.quoteBox}>
          <span className={styles.quote}>
            "멋사에서 처음 코딩을 배웠어요. 비전공자였지만 체계적인 커리큘럼과
            함께한 팀원들 덕분에 성장할 수 있었습니다. 특히 프로젝트 경험이 취업
            면접에서 큰 도움이 됐어요."
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
        <span className={styles.engTitle}>ACTIVITY REVIEWS</span>
        <span className={styles.korTitle}>활동 후기</span>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <span className={styles.boxTitle}>해커톤 후기</span>
            <span className={styles.boxDes}>
              1박 동안 팀원들과 밤새 개발한 경험이 아직도 생생해요. 힘들었지만
              가장 뜻깊은 순간이었습니다.
            </span>
          </div>
          <div className={styles.box}>
            <span className={styles.boxTitle}>트랙 세션 후기</span>
            <span className={styles.boxDes}>
              백엔드 트랙에서 API 설계부터 배포까지 전 과정을 경험했어요. 실무에
              바로 적용할 수 있는 내용이라 좋았습니다.
            </span>
          </div>
          <div className={styles.box}>
            <span className={styles.boxTitle}>네트워킹 데이</span>
            <span className={styles.boxDes}>
              현업 개발자분들과 직접 이야기 나눌 수 있어서 진로에 대한 시야가
              넓어졌어요.
            </span>
          </div>
          <div className={styles.box}>
            <span className={styles.boxTitle}>데모데이 후기</span>
            <span className={styles.boxDes}>
              한 학기 동안 만든 프로젝트를 발표하는 자리. 긴장됐지만 피드백을
              받으며 많이 성장했습니다.
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sections;
