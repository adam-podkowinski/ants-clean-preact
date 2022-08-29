import classes from "./about.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import { FaCalendarWeek, FaCheck, FaShieldAlt, FaStar } from "react-icons/fa";

const About = () => {
  return (
    <section id={"about"} class={classes.about}>
      <ScrollAnimation animateIn={"fadeInUp"} duration={0.6} animateOnce={true}>
        <div class={classes.images}>
          <div class={classes.image} />
          <div class={classes.image} />
          <div class={classes.image} />
          <div class={classes.image} />
        </div>
      </ScrollAnimation>
      <div class={"container"}>
        <h3 class={`section-h3 ${classes.aboutHeader}`}>O nas</h3>
        <h1 class={`section-h1 ${classes.aboutHeaderBig}`}>
          Dowiedz się więcej!
        </h1>
        <p class={"section-p"}>
          Ants Clean działa na terenie Szczecina i wykonuje wszelkiego rodzaju
          prace ogrodowe. Aby zobaczyć rezultaty naszych prac zapraszamy na{" "}
          <a href="https://instagram.com/ants.clean" target={"blank"}>
            Instagrama
          </a>
          . Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet
          eaque et fugiat inventore maiores officia quidem repellat tenetur
          voluptatibus. Alias amet ipsa minima porro quam, reiciendis rem
          voluptas voluptatibus?
        </p>
        <ScrollAnimation
          animateIn={"fadeInUp"}
          duration={0.6}
          offset={75}
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
              <FaStar class={classes.featureIcon} />
              <p>
                <span>Dokładna</span> praca
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
      </div>
    </section>
  );
};

export default About;
