import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./styles/Home.module.scss";
import data from "./data/data.json";
import { useState } from "react";

const App = () => {
  const [currentText, setCurrentText] = useState([]);
  const [leftRandomText, setLeftRandomText] = useState(data.slice(2));
  const [currentOption, setCurrentOption] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isPersonalShown, setIsPersonalShown] = useState(false);
  const handleRadioChange = (e) => {
    setCurrentOption(e.target.value);
  };
  const handleTextChange = (type) => {
    setErrorText("");
    let text;
    switch (currentOption) {
      case "1":
        text = data[0];
        break;
      case "2":
        text = data[1];
        break;
      case "3":
        if (type === "replace") {
          const randomData = data.slice(2);
          text = randomData[Math.floor(Math.random() * randomData.length)];
          setLeftRandomText(randomData.filter((item) => item !== text));
        } else if (type === "append") {
          if (leftRandomText.length === 0) {
            setErrorText("Brak dostępnych losowych tekstów");
            return;
          }
          text =
            leftRandomText[Math.floor(Math.random() * leftRandomText.length)];
          setLeftRandomText((prev) => prev.filter((item) => item !== text));
        }
        break;
      default:
        setErrorText("Wybierz opcję");
        return;
    }
    if (type === "replace") {
      setCurrentText([text]);
    } else if (type === "append") {
      if (currentText.includes(text)) {
        setErrorText("Tekst już istnieje");
        return;
      }
      setCurrentText((prev) =>
        [...prev, text].sort((a, b) => a.localeCompare(b))
      );
    }
  };
  return (
    <>
      <Header isPersonalShown={isPersonalShown} />
      <main className={styles.main__container}>
        <h1 className={styles.main__title}>Nagłówek H1</h1>
        <div className={styles.main__divider} />
        <div className={styles.block__container}>
          <div className={styles.block__first}>
            <h2 className={styles.block__title}>Blok pierwszy</h2>
            <div className={styles.radio}>
              <div className={styles.radio__item}>
                <input
                  type="radio"
                  id="option1"
                  name="options"
                  value="1"
                  className={styles.radio__input}
                  onChange={handleRadioChange}
                />
                <span className={styles.radio__custom} />
                <label htmlFor="option1" className={styles.radio__label}>
                  Opcja pierwsza
                </label>
              </div>
              <div className={styles.radio__item}>
                <input
                  type="radio"
                  id="option2"
                  name="options"
                  value="2"
                  className={styles.radio__input}
                  onChange={handleRadioChange}
                />
                <span className={styles.radio__custom} />
                <label htmlFor="option2" className={styles.radio__label}>
                  Opcja druga
                </label>
              </div>
              <div className={styles.radio__item}>
                <input
                  type="radio"
                  id="option3"
                  name="options"
                  value="3"
                  className={styles.radio__input}
                  onChange={handleRadioChange}
                />
                <span className={styles.radio__custom} />
                <label htmlFor="option3" className={styles.radio__label}>
                  Opcja losowa
                </label>
              </div>
            </div>
          </div>
          <div className={styles.block__second}>
            <h2 className={styles.block__title}>Blok drugi</h2>
            <div className={styles.block__btncontainer}>
              <button
                className={styles.block__btn}
                onClick={() => handleTextChange("replace")}
              >
                Zastąp
              </button>
              <button
                className={styles.block__btn}
                onClick={() => handleTextChange("append")}
              >
                Doklej
              </button>
            </div>
          </div>
          <div className={styles.block__third}>
            <h2
              className={`${styles.block__title} ${styles["block__title--long"]}`}
            >
              Blok z długą nazwą która sama się przytnie jeśli tekst będzie zbyt
              długi
            </h2>
            <div className={styles.block__para}>
              {currentText
                ? currentText.map((text, index) => <p key={index}>{text}</p>)
                : "Kliknij przycisk aby zastąpić lub dokleić tekst"}
              {errorText && <p className={styles.block__error}>{errorText}</p>}
            </div>
          </div>
        </div>
      </main>
      <Footer
        showIsPersonal={() => setIsPersonalShown(true)}
        resetSettings={() => {
          setCurrentText([]);
          setLeftRandomText(data.slice(2));
          setErrorText("");
          setIsPersonalShown(false);
        }}
      />
    </>
  );
};

export default App;
