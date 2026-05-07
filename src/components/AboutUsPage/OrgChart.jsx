import styles from "./OrgChart.module.css";

const teamData = [
  { team: "기획팀", members: ["윤시온"] },
  { team: "교육팀", members: ["박시윤", "도유성"] },
  { team: "미디어팀", members: ["김영원"] },
  { team: "회계팀", members: ["김채윤"] },
  { team: "사업팀", members: ["오한영", "김도경"] },
];

const partData = [
  { part: "기획", members: ["오한영", "김도경"] },
  { part: "디자인", members: ["김영원"] },
  { part: "프론트엔드", members: ["도유성", "김채윤"] },
  { part: "백엔드", members: ["윤시온", "박시윤", "이경훈"] },
];

function TeamCard({ team, members }) {
  return (
    <div className={styles.teamCol}>
      {members.map((member, i) => (
        <div key={i} className={styles.teamBox}>
          <div className={styles.teamName}>{team}</div>
          <div className={styles.memberName}>{member}</div>
        </div>
      ))}
    </div>
  );
}

function PartCard({ part, member }) {
  return (
    <div className={styles.partBox}>
      <div className={styles.partName}>{part}</div>
      <div className={styles.partMember}>{member}</div>
    </div>
  );
}

export function DefaultOrgChart() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.orgRoot}>
        <div className={styles.ceoBox}>
          <div className={styles.ceoTitle}>대표</div>
          <div className={styles.ceoName}>이경훈</div>
        </div>
        <div className={styles.connectorV} />
        <div className={styles.teamsRow}>
          {teamData.map((t, i) => (
            <TeamCard key={i} team={t.team} members={t.members} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function PartOrgChart() {
  return (
    <div className={styles.partSection}>
      <div className={styles.teamsRow}>
        {partData.map((p, i) => (
          <div key={i} className={styles.teamCol}>
            {p.members.map((member, j) => (
              <PartCard key={j} part={p.part} member={member} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
