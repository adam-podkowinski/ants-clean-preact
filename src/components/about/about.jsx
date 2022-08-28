import classes from "./about.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <div class={"container"} id={"about"}>
      <ScrollAnimation
        animateIn={"slideInUp"}
        duration={0.3}
        animateOnce={true}
      >
        <div class={classes.images}>
          <div class={classes.image} />
          <div class={classes.image} />
          <div class={classes.image} />
          <div class={classes.image} />
        </div>
      </ScrollAnimation>
      O NAS
    </div>
  );
};

export default About;
