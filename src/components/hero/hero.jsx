import classes from "./hero.module.scss";

const Hero = () => {
  return (
    <div class={classes.hero}>
      <div class={classes.center}>
        <h1>ANTS CLEAN</h1>
        <p>
          Działalność gospodarcza zajmująca się wykonywaniem różnorakich prac
          ogrodowych.
        </p>
        <div class={classes.buttonBox}>
          <button>Zadzwoń</button>
          <button>Cennik</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
