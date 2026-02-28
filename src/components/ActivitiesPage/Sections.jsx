import styles from "./Sections.module.css";

const Sections = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <span className={styles.engTitle}>ACTIVITIES</span>
        <span className={styles.korTitle}>우리의 활동</span>
        <span className={styles.description}>
          한 학기 동안 이런 활동들을 합니다.
        </span>
      </div>

      <div className={styles.mobileImageSlider}>
        <span>모바일용 이미지 슬라이더 자리</span>
      </div>

      <div className={styles.sectionContainer}>
        <div className={styles.section}>
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
        </div>
        <div className={styles.image}></div>
      </div>

      <div className={styles.sectionContainer2}>
        <div className={styles.image}></div>
        <div className={styles.section}>
          <span className={styles.num}>02</span>
          <span className={styles.korTitle}>Common Sessions</span>
          <span className={styles.description}>
            트랙에 상관없이 전체 멤버가 함께하는 공통 세션입니다.
            <br />
            Git, 협업 도구, 기획 방법론 등 모든 개발자에게 필요한 역량을
            학습합니다.
          </span>
          <div className={styles.listContainer}>
            <li className={styles.list}>주 1회 오프라인 세션</li>
            <li className={styles.list}>트랙별 멘토 배정</li>
            <li className={styles.list}>매주 과제 및 코드 리뷰</li>
          </div>
        </div>
      </div>

      <div className={styles.sectionContainer}>
        <div className={styles.section}>
          <span className={styles.num}>03</span>
          <span className={styles.korTitle}>Guest Lectures</span>
          <span className={styles.description}>
            어쩌고 저쩌고
            <br />
            설명설명설명설명
          </span>
          <div className={styles.listContainer}>
            <li className={styles.list}>항목1</li>
            <li className={styles.list}>항목2</li>
            <li className={styles.list}>항목3</li>
          </div>
        </div>
        <div className={styles.image}></div>
      </div>
    </div>
  );
};

export default Sections;
