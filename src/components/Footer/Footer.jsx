import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftContainer}>
        <span className={styles.name}>멋쟁이사자처럼 가톨릭대학교</span>
        <span className={styles.copyright}>© 2026 LIKELION CUK. All rights reserved.</span> 
      </div>
      <nav className={styles.nav}>
        <span onClick={() => window.open('https://www.instagram.com/likelion_cuk/', '_blank')}>Instagram</span>
        <span onClick={() => window.open('')}>Github</span>
        <span onClick={() => window.open('')}>문의하기</span>
      </nav>
    </footer>
  );
};

export default Footer;
