import classes from "./hero.module.scss";

const Hero = () => {
  return (
    <div class={classes.hero}>
      <div class={classes.center}>
        <h1>ANTS CLEAN</h1>
        <p>Zaopiekuje się twoim ogrodem. 🌱 🏡</p>
        <div class={classes.buttonBox}>
          <a href={"#"}>Zadzwoń</a>
          <a href={"#"}>Cennik</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
