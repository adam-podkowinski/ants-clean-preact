import classes from "./pricing.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

const Pricing = () => {
  return (
    <section id={"pricing"} class={`container ${classes.pricing}`}>
      <h3 class={"section-h3"}>Cennik</h3>
      <h1 class={"section-h1"}>Ile płacę? 💲</h1>
      <ScrollAnimation
        animateIn={"fadeInUp"}
        offset={50}
        duration={0.4}
        animateOnce={true}
      >
        <div class={classes.center}>
          <div class={classes.card}>
            <h2 class={classes.subheading}>Wszystkie prace w cenie:</h2>
            <div class={classes.normalPrice}>
              <span>22 zł/h</span> <p>+ stałe </p> <span>15 zł</span>
            </div>
            <h3 class={classes.boldText}>lub na indywidualną wycenę.</h3>
          </div>
          <h1 class={"section-h1"}>Zniżki</h1>
          <div className={classes.card}>
            <h2 class={classes.discount}>
              Dla osób po <span>65</span> roku życia: <span>-10%</span> na co
              drugie zamówienie
            </h2>
          </div>
        </div>
      </ScrollAnimation>
      <div class={classes.divider} />
    </section>
  );
};

export default Pricing;
