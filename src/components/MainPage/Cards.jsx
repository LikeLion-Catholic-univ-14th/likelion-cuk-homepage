import styles from "./Cards.module.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CardsData = [
  {
    id: "01",
    title: "About Us",
    description: "동아리의 미션, 연혁, 조직 구조를 소개합니다.",
    path: "/aboutus",
  },
  {
    id: "02",
    title: "Activities",
    description: "트랙 세션, 공동 세션, 연사 특강 등 연간 활동을 확인하세요.",
  },
  {
    id: "03",
    title: "Projects",
    description: "기수별 팀 프로젝트의 성과물을 둘러보세요.",
  },
  {
    id: "04",
    title: "Voice of Lion",
    description: "졸업생 인터뷰와 활동 후기를 읽어보세요.",
  },
];

const Cards = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {CardsData.map((card) => (
        <motion.div
          key={card.id}
          className={styles.card}
          onClick={() => navigate(card.path)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            y: { duration: 0.7 },
          }}
        >
          <span className={styles.number}>{card.id}</span>
          <span className={styles.title}>{card.title}</span>
          <span className={styles.description}>{card.description}</span>
          <span className={styles.arrow}>→</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;
