import classes from "./hero.module.scss";
import { CgPhone, CgTag } from "react-icons/cg";

const Hero = () => {
  return (
    <div class={classes.hero}>
      <div class={classes.center}>
        <h1>ANTS CLEAN</h1>
        <p>Zaopiekuje się twoim ogrodem. 🌱 🏡</p>
        <div class={classes.buttonBox}>
          <a href={"#"}>
            <CgPhone /> Zadzwoń
          </a>
          <a href={"#"}>
            <CgTag /> Cennik
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
