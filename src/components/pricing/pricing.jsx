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
            <h2 class={classes.subheading}>Umów się z nami na bezpłatną wycenę.</h2>
            <div class={classes.normalPrice}>
              <div>
                <h3 class={classes.pricing}>Lub:</h3>
              </div>
              <div class={classes.divider} />
              <div>
                <h3 class={classes.hour}>Stała stawka godzinowa</h3>
                <span>24 zł + 30 zł za rozpoczęcie pracy</span>
              </div>
              <div class={classes.divider} />
            </div>
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
