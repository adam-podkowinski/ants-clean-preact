import classes from "./pricing.module.scss";

const Pricing = () => {
  return (
    <section id={"pricing"} class={`container ${classes.pricing}`}>
      <h3 class={"section-h3"}>Cennik</h3>
      <h1 class={"section-h1"}>Ile płacę?</h1>
      <p class={"section-p"}>W huj dużo.</p>
    </section>
  );
};

export default Pricing;
