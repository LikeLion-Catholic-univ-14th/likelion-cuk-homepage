import styles from "./Sections.module.css";
import FadeUp from "../FadeUp";
import { useState, useEffect } from "react";
import img_FE from "../../assets/tracksession_FE.jpeg";
import img_BE from "../../assets/tracksession_BE.jpg";
import img_Design from "../../assets/tracksession_Design.jpg";
import img_Plan from "../../assets/tracksession_Plan.jpg";
import commonImg_1 from "../../assets/commonsession_1.jpg";
import commonImg_2 from "../../assets/commonsession_2.jpg";
import commonImg_3 from "../../assets/commonsession_3.JPG";
import commonImg_4 from "../../assets/commonsession_4.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Sections = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [commonIndex, setCommonIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const trackSessionImages = [img_FE, img_BE, img_Plan, img_Design];
  const commonSessionImages = [
    commonImg_1,
    commonImg_2,
    commonImg_3,
    commonImg_4,
  ];
  const mobileSliderImages = [
    img_FE,
    img_BE,
    img_Plan,
    img_Design,
    commonImg_1,
    commonImg_2,
    commonImg_3,
    commonImg_4,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTrackIndex((prev) => (prev + 1) % trackSessionImages.length);
      setCommonIndex((prev) => (prev + 1) % commonSessionImages.length);
      setMobileIndex((prev) => (prev + 1) % mobileSliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <FadeUp className={styles.titleSection}>
        <span className={styles.engTitle}>ACTIVITIES</span>
        <span className={styles.korTitle}>우리의 활동</span>
        <span className={styles.description}>
          1년 동안 이런 활동들을 합니다.
        </span>
      </FadeUp>

      <FadeUp className={styles.mobileImageSlider}>
        <AnimatePresence mode="wait">
          <motion.img
            key={mobileIndex}
            src={mobileSliderImages[mobileIndex]}
            alt="Track Session"
            className={styles.mobileImage}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>
      </FadeUp>

      <div className={styles.sectionContainer}>
        <FadeUp className={styles.section}>
          <span className={styles.num}>01</span>
          <span className={styles.korTitle}>Track Sessions</span>
          <span className={styles.description}>
            기획, 디자인, 프론트엔드, 백엔드 트랙별로 진행되는 스터디
            세션입니다.
            <br />
            매주 부여되는 실습 과제를 통해 실질적인 개발 역량을 키웁니다.
          </span>
          <div className={styles.listContainer}>
            <li className={styles.list}>주 1회 오프라인 세션</li>
            <li className={styles.list}>트랙별 멘토 배정</li>
            <li className={styles.list}>매주 과제 및 코드 리뷰</li>
          </div>
        </FadeUp>
        <FadeUp className={styles.imageContainer}>
          <AnimatePresence mode="wait">
            <motion.img
              key={trackIndex}
              src={trackSessionImages[trackIndex]}
              alt="Track Session"
              className={styles.image}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </FadeUp>
      </div>

      <div className={styles.sectionContainer2}>
        <FadeUp className={styles.imageContainer}>
          <AnimatePresence mode="wait">
            <motion.img
              key={commonIndex}
              src={commonSessionImages[commonIndex]}
              alt="Track Session"
              className={styles.image}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </FadeUp>
        <FadeUp className={styles.section}>
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
        </FadeUp>
      </div>

      <div className={styles.sectionContainer3}>
        <FadeUp className={styles.section}>
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
        </FadeUp>
        {/* <FadeUp className={styles.imageContainer}>
          이미지 추가 예정, sectionContainer3도 임시
        </FadeUp> */}
      </div>
    </div>
  );
};

export default Sections;
