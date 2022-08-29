import classes from "./about.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import { FaClock, FaCheck, FaStar, FaSkull } from "react-icons/fa";

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
          prace ogrodowe. Pawlow lol. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Esse in ipsum magni nihil officia, omnis placeat
          porro vitae? Blanditiis culpa debitis ducimus eum incidunt natus
          placeat quas quod ullam voluptates!
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
              <FaClock class={classes.featureIcon} />
              <p>
                <span>Szybka</span> robota
              </p>
            </div>
            <div class={classes.featureBox}>
              <div class={classes.featureIcon}>
                <FaSkull />
              </div>
              <p>
                <span>Zadowoleni</span> pracownicy
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
