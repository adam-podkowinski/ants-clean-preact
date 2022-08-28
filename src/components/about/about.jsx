import classes from "./about.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <section id={"about"} class={classes.about}>
      <ScrollAnimation
        animateIn={"slideInUp"}
        duration={0.5}
        animateOnce={true}
      >
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
        <p>
          Ants Clean działa na terenie Szczecina i wykonuje wszelkiego rodzaju
          prace ogrodowe. Tutaj na dole będą cechy firmy z ikonami.
        </p>
      </div>
    </section>
  );
};

export default About;
