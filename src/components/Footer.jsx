import styles from "../styles/Footer.module.scss";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.css__container}>
        <h2 className={styles.css__text}>
          <span className={styles.css__text}>CSS</span>
          <span className={styles.css__text}>is</span>
          <span className={styles.css__text}>awesome</span>
        </h2>
      </div>
      <button className={styles.footer__btn}>
        Pokaż <IoIosArrowUp className={styles.footer__icon} />
      </button>
    </footer>
  );
};

export default Footer;
