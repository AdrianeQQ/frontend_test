import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./styles/Home.module.scss";
import dataFile from "./data/data.json";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || dataFile
  );
  const [currentText, setCurrentText] = useState([]);
  const [currentOption, setCurrentOption] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isPersonalShown, setIsPersonalShown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
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
        } else if (type === "append") {
          const randomTexts = data
            .slice(2)
            .filter((item) => !currentText.includes(item));
          if (randomTexts.length === 0) {
            setErrorText("Brak dostępnych losowych tekstów");
            return;
          }
          text = randomTexts[Math.floor(Math.random() * randomTexts.length)];
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
  const handleEdit = () => {
    setIsModalOpen(true);
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
            <button
              className={`${styles.block__btn} ${styles["block__btn--special"]}`}
              onClick={handleEdit}
            >
              Edytuj
            </button>
            {isModalOpen && (
              <div
                className={styles.modal__overlay}
                onClick={() => setIsModalOpen(false)}
              >
                <div
                  className={styles.modal}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2 className={styles.modal__title}>Aktualna lista</h2>
                  {data.map((text, index) => (
                    <div key={index} className={styles.modal__textoverlay}>
                      <p className={styles.modal__text}>{text}</p>
                      <div className={styles.modal__btncontainer}>
                        <button
                          className={styles.modal__btn}
                          onClick={() => {
                            const newText = prompt("Wprowadź nowy tekst", text);
                            if (newText) {
                              setData((prev) =>
                                prev.map((item) =>
                                  item === text ? newText : item
                                )
                              );
                            }
                          }}
                        >
                          Edytuj
                        </button>
                        <button
                          className={styles.modal__btn}
                          onClick={() =>
                            setData((prev) =>
                              prev.filter((item) => item !== text)
                            )
                          }
                        >
                          Usuń
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    className={`${styles.modal__btn} ${styles["modal__btn--special"]}`}
                    onClick={() => {
                      const newText = prompt("Wprowadź nowy tekst");
                      if (newText) {
                        setData((prev) => [...prev, newText]);
                      }
                    }}
                  >
                    Dodaj
                  </button>
                </div>
              </div>
            )}
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
          setErrorText("");
          setIsPersonalShown(false);
          setData(dataFile);
        }}
      />
    </>
  );
};

export default App;
