import classes from "./about.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import {
  FaCalendarWeek,
  FaCheck,
  FaShieldAlt,
  FaPercent,
} from "react-icons/fa";

const About = () => {
  const images = (
    <>
      <img src="garden1.jpg" alt="Ogród w Szczecinie" class={classes.image} />
      <img src="garden2.jpg" alt="Ogród w Szczecinie" class={classes.image} />
      <img src="garden3.jpg" alt="Ogród w Szczecinie" class={classes.image} />
      <img src="garden4.jpg" alt="Ogród w Szczecinie" class={classes.image} />
      <img src="garden5.jpg" alt="Ogród w Szczecinie" class={classes.image} />
      <img src="garden6.jpg" alt="Ogród w Szczecinie" class={classes.image} />
      <img src="garden7.jpg" alt="Ogród w Szczecinie" class={classes.image} />
      <img src="garden8.jpg" alt="Ogród w Szczecinie" class={classes.image} />
    </>
  );
  return (
    <>
      <section id={"about"} class={classes.about}>
        <ScrollAnimation
          animateIn={"fadeInUp"}
          duration={0.6}
          animateOnce={true}
        >
          <div class={classes.imagesContainer}>
            <div class={classes.images}>{images}</div>
            <div class={`${classes.images} ${classes.images2}`}>{images}</div>
          </div>
        </ScrollAnimation>
        <div class={`container ${classes.aboutContainer}`}>
          <h3 class={`section-h3 ${classes.aboutHeader}`}>O nas</h3>
          <h1 class={`section-h1 ${classes.aboutHeaderBig}`}>
            Dowiedz się więcej!
          </h1>
          <p class={"section-p"}>
            <p>
              <strong>Ants Clean</strong> działa na terenie{" "}
              <strong>Szczecina</strong> i wykonuje wszelkiego rodzaju prace
              ogrodowe.
            </p>
            <p>
              Oferujemy pielęgnację ogrodu, projektowanie przestrzeni ogrodowej
              i sprzedaż samorobionych dekoracji.
            </p>
            <p>
              Aby zobaczyć rezultaty naszych prac zapraszamy na{" "}
              <a href="https://instagram.com/ants.clean" target={"blank"}>
                Instagrama
              </a>
              .
            </p>
          </p>
          <ScrollAnimation
            animateIn={"fadeInUp"}
            duration={0.6}
            offset={85}
            animateOnce={true}
          >
            <div class={classes.features}>
              <div class={classes.featureBox}>
                <FaCheck class={classes.featureIcon} />
                <p>
                  <span>+500</span> wykonanych zleceń
                </p>
              </div>
              <div class={classes.featureBox}>
                <FaPercent class={classes.featureIcon} />
                <p>
                  Zniżka <span>10%</span> dla seniorów
                </p>
              </div>
              <div class={classes.featureBox}>
                <FaCalendarWeek class={classes.featureIcon} />
                <p>
                  Działamy <span>7 dni</span> w tygodniu
                </p>
              </div>
              <div class={classes.featureBox}>
                <FaShieldAlt class={classes.featureIcon} />
                <p>
                  <span>100%</span> higieny i ostrożności
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <div id={"offert"} class={classes.aboutContainer}>
            <h2 class={"section-h2"}>Co oferujemy?</h2>
            <p class={"section-p"}>
              <div>
                Poniżej znajduje się lista z przykładowymi pracami, które
                oferuje <strong>Ants&nbsp;Clean</strong>:
              </div>
            </p>
            <ScrollAnimation
              animateIn={"fadeInUp"}
              duration={0.6}
              offset={85}
              animateOnce={true}
            >
              <ul class={classes.offerList}>
                <li>
                  <strong>Wertykulacja</strong>
                </li>
                <li>
                  <strong>Areacja</strong>
                </li>
                <li>
                  <strong>Dosiewki i piaskowanie</strong>
                </li>
                <li>
                  <strong>Zakładanie trawnika z siewu</strong>
                </li>
                <li>
                  <strong>Sadzenie roślin</strong>
                </li>
                <li>
                  <strong>Przycinanie żywopłotów</strong>
                </li>
                <li>
                  <strong>Formowanie krzewów</strong>
                </li>
                <li>
                  <strong>Pielenie</strong>
                </li>
                <li>
                  <strong>Czyszczenie kostki brukowej</strong>
                </li>
                <li>
                  <strong>Koszenie</strong>
                </li>
                <li>
                  <strong>Wykaszanie chaszczy</strong>
                </li>
                <li>
                  <strong>Opryski roślin</strong>
                </li>
                <li>
                  <strong>Wysypywanie kory</strong>
                </li>
                <li>
                  <strong>Rozkładanie włókniny</strong>
                </li>
                <li>
                  <strong>Grabienie liści</strong>
                </li>
                <li>
                  <strong>Zabezpieczanie roślin na zimę</strong>
                </li>
                <li>
                  <strong>
                    Projektowanie i wykonywanie przestrzeni ogrodowej
                  </strong>
                </li>
                <li>
                  <strong>
                    Sprzedaż własnoręcznie robionych dekoracji ogrodowych
                  </strong>
                </li>
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
