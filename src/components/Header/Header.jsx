import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import logoImage from "../../assets/가대멋사로고.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isMainPage) {
      setIsScrolled(false);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMainPage]);

  const headerClassName = `${styles.header} ${isMainPage && !isScrolled ? styles.mainHeader : ""}`;

  return (
    <header className={headerClassName}>
      <div className={styles.logoContainer} onClick={() => navigate("/")}>
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
