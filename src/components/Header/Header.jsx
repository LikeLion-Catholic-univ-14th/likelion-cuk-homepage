import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import logoImage from "../../assets/가대멋사로고.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer} onClick = {() => navigate("/")}>
        <img className={styles.logo} src={logoImage} alt="logo" />
        <span className={styles.name}>LIKELION CUK</span>
      </div>
      <nav className={styles.nav}>
        <span onClick={() => navigate("/aboutus")}>About Us</span>
        <span onClick={() => navigate("/activities")}>Activities</span>
        <span onClick={() => navigate("/projects")}>Projects</span>
        <span onClick={() => navigate("/voiceoflion")}>Voice of Lion</span>
      </nav>
    </header>
  );
};

export default Header;
