import styles from "../styles/Footer.module.scss";
import { IoIosArrowUp, IoIosArrowForward } from "react-icons/io";

const Footer = ({ showIsPersonal, resetSettings }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.css__container}>
        <h2 className={styles.css__textcontainer}>
          <span className={styles.css__text}>CSS</span>
          <span className={styles.css__text}>is</span>
          <span className={styles.css__text}>awesome</span>
        </h2>
      </div>
      <div className={styles.company__container}>
        <div className={styles.company__divider} />
        <p className={styles.company__text}>nabthat</p>
        <div className={styles.company__divider} />
      </div>
      <div className={styles.footer__btncontainer}>
        <input type="checkbox" id="toggle" className={styles.footer__toggle} />
        <label htmlFor="toggle" className={styles.footer__btn}>
          Pokaż <IoIosArrowUp className={styles.footer__icon} />
        </label>
        <div className={styles.footer__frame}>
          <button className={styles.frame__btn} onClick={resetSettings}>
            <IoIosArrowForward className={styles.frame__icon} /> Zresetuj
            ustawienia
          </button>
          <button className={styles.frame__btn} onClick={showIsPersonal}>
            <IoIosArrowForward className={styles.frame__icon} /> Pokaż dane
            osobowe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
