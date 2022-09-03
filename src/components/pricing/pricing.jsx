import classes from "./pricing.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

const Pricing = () => {
  return (
    <section id={"pricing"} class={`container ${classes.pricing}`}>
      <h3 class={"section-h3"}>Cennik</h3>
      <h1 class={"section-h1"}>Ile płacę? 💲</h1>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        offset={120}
        duration={0.4}
        animateOnce={true}
      >
        <div class={classes.center}>
          <div class={classes.card}>
            <h2 class={classes.subheading}>Wszystkie prace w cenie:</h2>
            <div class={classes.normalPrice}>
              <div class={classes.divider} />
              <div>
                <h3 class={classes.hour}>1h pracy: </h3>
                <span>24 zł + 15 zł</span>
              </div>
              <div class={classes.divider} />
              <div>
                <h3 class={classes.hour}>Kolejne godziny: </h3>
                <span>24 zł</span>
              </div>
              <div class={classes.divider} />
            </div>
            <h3 class={classes.boldText}>lub na indywidualną wycenę.</h3>
          </div>
          <h1 class={"section-h1"}>Zniżki ✂</h1>
          <div className={classes.card}>
            <h2 class={classes.discount}>
              Dla osób po <span>65</span> roku życia:
              <br />
              <span>-10%</span>
            </h2>
          </div>
        </div>
      </ScrollAnimation>
      <div class={classes.divider} />
    </section>
  );
};

export default Pricing;
