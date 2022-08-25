import classes from "./hero.module.scss";

const Hero = () => {
  return (
    <div class={classes.hero}>
      <div class={classes.center}>
        <div>Ants Clean</div>
        <div>Here an image</div>
      </div>
    </div>
  );
};

export default Hero;
