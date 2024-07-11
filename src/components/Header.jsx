import styles from "../styles/Header.module.scss";
import { FaHtml5 } from "react-icons/fa";

const Header = ({ isPersonalShown }) => {
  return (
    <header className={styles.header}>
      <a
        href="/"
        className={styles["header__logo-container"]}
        aria-label="Homepage"
      >
        <FaHtml5 className={styles.logo} />
      </a>
      <div className={styles["header__info-container"]}>
        <h2 className={styles.header__title}>
          Zadanie{" "}
          <span className={styles["header__title--bold"]}>rekrutacyjne</span>
        </h2>
        {isPersonalShown && (
          <h3 className={styles.header__personal}>Adrian Garbowski</h3>
        )}
      </div>
    </header>
  );
};

export default Header;
