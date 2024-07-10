import styles from "../styles/Header.module.scss";
import { FaHtml5 } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo__container}>
        <FaHtml5 className={styles.logo} />
      </a>
      <div className={styles.info__container}>
        <h2 className={styles.info__title}>
          Zadanie{" "}
          <span className={styles["info__title--bold"]}>rekrutacyjne</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;
