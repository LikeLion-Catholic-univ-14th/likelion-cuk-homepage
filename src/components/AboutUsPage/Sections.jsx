import styles from "./Sections.module.css";
import FadeUp from "../FadeUp";

const Sections = () => {
  return (
    <div className={styles.container}>
      <FadeUp className={styles.section}>
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
      </FadeUp>
      <FadeUp className={styles.section}>
        <span className={styles.engTitle}>HISTORY</span>
        <span className={styles.korTitle}>연혁</span>
        <div className={styles.historyContainer}>
          <span className={styles.year}>2026</span>
          <span className={styles.historyDes}>
            14기 · 멋사 가대 홈페이지 제작
          </span>
          <span className={styles.year}>2025</span>
          <span className={styles.historyDes}>
            13기 · CUK 창업 아이디어 경진대회 최우수상, 컴퓨터정보공학부 학술제
            대상 수상
          </span>
          <span className={styles.year}>2024</span>
          <span className={styles.historyDes}>
            12기 · 아우름제 소개 페이지 제작, 네이버 클라우드 제휴
          </span>
          <span className={styles.year}>2023</span>
          <span className={styles.historyDes}>
            11기 · 멋쟁이사자처럼 가톨릭대학교 출범, 아우름제 소개 페이지 제작
          </span>
        </div>
      </FadeUp>
      <FadeUp className={styles.section}>
        <span className={styles.engTitle}>STRUCTURE</span>
        <span className={styles.korTitle}>연간 활동 흐름</span>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <span className={styles.num}>1학기</span>
            <span className={styles.boxTitle}>3~6월</span>
            <span className={styles.boxDes}>
              14기 OT, 교육 세션, <br />
              교내/중앙 아이디어톤
            </span>
          </div>
          <div className={styles.box}>
            <span className={styles.num}>여름방학</span>
            <span className={styles.boxTitle}>7~8월</span>
            <span className={styles.boxDes}>교내/중앙 해커톤</span>
          </div>
          <div className={styles.box}>
            <span className={styles.num}>2학기</span>
            <span className={styles.boxTitle}>9~12월</span>
            <span className={styles.boxDes}>
              MT, 연합/기업 해커톤, <br /> 교내 학술제, 수료식
            </span>
          </div>
        </div>
      </FadeUp>
    </div>
  );
};

export default Sections;
