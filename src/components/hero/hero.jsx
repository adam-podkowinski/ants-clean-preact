import classes from "./hero.module.scss";
import { CgPhone, CgTag } from "react-icons/cg";

const Hero = () => {
  return (
    <section class={classes.hero}>
      <div class={classes.center}>
        <h1>ANTS CLEAN</h1>
        <p>Zaopiekuje się twoim ogrodem. 🌱 🏡</p>
        <div class={classes.buttonBox}>
          <a href={"tel:+48534103127"} class={classes.mainButton}>
            <CgPhone /> Zadzwoń
          </a>
          <a href={"#pricing"} class={classes.secondaryButton}>
            <CgTag /> Cennik
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
