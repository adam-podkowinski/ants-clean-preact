import classes from "./pricing.module.scss";

const Pricing = () => {
  return (
    <section id={"pricing"} class={`container ${classes.pricing}`}>
      <h3 class={"section-h3"}>Ile płacę?</h3>
      <h1 class={"section-h1"}>W huj dużo!</h1>
      <p>Tak, to prawda, Aleksander jest żydem.</p>
    </section>
  );
};

export default Pricing;
