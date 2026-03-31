import styles from "./Sections.module.css";
import { motion } from "framer-motion";
import profileImg_kms from "../../assets/voiceoflion_김민석님.jpg";

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
          <div className={styles.profileImgContainer}>
            <span className={styles.profileImgText}>김</span>
          </div>
          <div className={styles.nameJob}>
            <span className={styles.name}>김동현 | 11기 프론트엔드</span>
            <span className={styles.job}>Product Operation</span>
          </div>
        </div>
        <div className={styles.quoteBox}>
          <span className={styles.quote}>
            "처음에 가톨릭대학교에 멋사를 만들 때만 해도 이렇게까지 쭉 이어질 줄
            몰랐습니다. 당시에는 프론트엔드랑 백엔드만 있었는데 이렇게까지 많은
            사람들이 모이게 될 줄도 몰랐습니다 ㅎㅎ 멋사에서 이어진 인연들로
            학교에 다니며 창업 도전도 하고 아직까지도 서로 만남을 유지하고 서로
            도와 취업도 하는 등 제 인생에 있어서 좋은 영향만 주었던 것 같습니다.
            배움을 통해서 얻는 것도 크겠지만 여기서 만난 인연들을 통해서 내
            인생의 새 챕터를 열어가시길 진심으로 기원합니다!"
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
          <div className={styles.profileImgContainer}>
            <img
              src={profileImg_kms}
              alt="김민석님"
              className={styles.profileImg}
            />
          </div>
          <div className={styles.nameJob}>
            <span className={styles.name}>김민석 | 11기 백엔드</span>
            <span className={styles.job}>소프트웨어 개발자</span>
          </div>
        </div>
        <div className={styles.quoteBox}>
          <span className={styles.quote}>
            "당시에 제가 부족한 점이 많았지만 함께 열심히 따라와준 부원들이
            생각납니다. 멋사에서 많은 인연들을 만들었고, 단순 프로젝트 경험뿐만
            아니라 창업 동아리까지 이어지는 활동을 할 수 있었습니다. 요즘은 AI를
            활용하면 많은 것을 혼자 할 수 있지만, 그럼에도 함께 동기부여하면서
            프로젝트를 만드는 것이 더 큰 보람과 성취로 이어질 수 있다고
            생각합니다. 특히나 아직 AI를 사용해서 없는 기능을 만들어내는 것은
            어렵기 때문에, 기술적인 측면에서 아이디어가 돋보이는 프로젝트를
            경험하면 좋을 것 같습니다. 후배님들도 저처럼 멋사 활동을 통해서 많은
            인연을 만드시고 좋은 경험을 가져가셨으면 좋겠습니다."
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
            <span className={styles.boxTitle}>아이디어톤 후기</span>
            <span className={styles.boxName}>윤O온 | 13기 백엔드</span>
            <span className={styles.boxDes}>
              "1학기 동안 총 두 번의 아이디어톤에 참가했습니다. 그동안 개발에만
              집중해 기획 경험이 거의 없었는데, 직접 기획을 해보면서 기획의
              중요성과 매력을 깨달았습니다. 이 경험이 이후 공모전 도전으로
              이어졌습니다. 아이디어톤 경험이 없었다면 시도하지 못했을
              공모전이라 많이 의미 있었습니다."
            </span>
          </div>
          <div className={styles.box}>
            <span className={styles.boxTitle}>해커톤 후기</span>
            <span className={styles.boxName}>고O | 13기 기획·디자인</span>
            <span className={styles.boxDes}>
              "저는 비전공자로 중앙 해커톤에 도전했었는데, 처음에는 걱정도
              많았지만 지금 돌아보면 정말 남는 게 많은 과정이었던 것 같습니다.
              현재는 건축 쪽으로 취업 준비를 하고 있지만, 당시 다른 전공자분들과
              소통하며 아이디어를 하나씩 완성해 나갔던 경험이 지금 제 전공
              공부에도 생각보다 큰 도움이 되고 있습니다. 14기 분들도 활동하다
              보면 조금 힘들 때가 있겠지만, 끝까지 노력하다 보면 분명 얻어가는
              게 정말 많을 거라고 생각합니다! 다들 나중에 좋은 추억으로 남길 수
              있도록 즐겁게 활동하셨으면 좋겠습니다 :)"
            </span>
          </div>
          <div className={styles.box}>
            <span className={styles.boxTitle}>스터디 후기</span>
            <span className={styles.boxName}>박O윤 | 13기 백엔드</span>
            <span className={styles.boxDes}>
              "과제가 원하는 대로 풀리지 않는 경우가 많았고, 제출 기한을 맞추기
              위해 밤늦게까지 코드를 붙잡아야 하는 날도 많았습니다. 이해되지
              않는 부분은 스터디장님께 지속적으로 질문하며 보완해야 했습니다.
              매주 블로그에 학습 내용을 정리해 업로드해야 한다는 부담감 또한
              상당했습니다. 그러나 이러한 압박이 제 역량을 확장시키는 원동력이
              되기도 했습니다."
            </span>
          </div>
          <div className={styles.box}>
            <span className={styles.boxTitle}>동아리 연합 학술제 후기</span>
            <span className={styles.boxName}>김O진 | 13기 프론트엔드</span>
            <span className={styles.boxDes}>
              "저보다 개발 경험이 풍부하신 선배님들과 함께 프로젝트를
              진행하면서, 이슈 관리, 브랜치 관리 등 협업 관련 부분부터 전역 상태
              관리, 쿼리 캐싱 등 프론트엔드 코드 지식까지 다양하게 배울 수
              있었습니다. 프로젝트를 실제로 배포하여 서비스를 직접 사용해보면서
              개발의 즐거움을 진정으로 느낄 수 있었습니다. 만약 동아리에서
              적극적으로 학술제 참여를 권유하지 않았다면, 아마 선배님들께 용기를
              내어 프로젝트를 함께 하자고 요청하지 못했을 것이고, 이렇게 크게
              성장할 수 있는 기회를 놓쳤을 것입니다."
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sections;
