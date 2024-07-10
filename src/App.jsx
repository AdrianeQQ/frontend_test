import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from "./styles/Home.module.scss";

const App = () => {
  return (
    <>
      <Header />
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
                />
                <span className={styles.radio__custom} />
                <label htmlFor="option1" className={styles.radio__label}>
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
                />
                <span className={styles.radio__custom} />
                <label htmlFor="option1" className={styles.radio__label}>
                  Opcja losowa
                </label>
              </div>
            </div>
          </div>
          <div className={styles.block__second}>
            <h2 className={styles.block__title}>Blok drugi</h2>
            <button className={styles.block__btn}>Zastąp</button>
            <button className={styles.block__btn}>Doklej</button>
          </div>
          <div className={styles.block__third}>
            <h2
              className={`${styles.block__title} ${styles["block__title--long"]}`}
            >
              Blok z długą nazwą która sama się przytnie jeśli tekst będzie zbyt
              długi
            </h2>
            <p className={styles.block__para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, dolore ea rerum fugit reprehenderit voluptatibus,
              corrupti magni eos quaerat autem dolores sequi atque fuga nisi
              labore porro quod quis laudantium? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sunt laboriosam suscipit magnam qui
              maxime accusamus beatae exercitationem delectus nisi non
              perspiciatis molestiae assumenda facilis odit maiores alias, nam
              quas necessitatibus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsum, inventore quaerat ratione, pariatur nisi
              quae officiis odit beatae vitae, eaque voluptates obcaecati culpa
              officia ut? Consequuntur repellat cumque et suscipit?
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
