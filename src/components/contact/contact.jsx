import classes from "./contact.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
} from "react-icons/all";

const Contact = () => {
  return (
    <section id={"contact"} class={classes.contact}>
      <div class={"container"}>
        <h3 class={"section-h3"}>Kontakt</h3>
        <h1 class={"section-h1"}>Zadzwoń do nas</h1>
        <ScrollAnimation
          animateIn={"fadeInUp"}
          offset={50}
          duration={0.4}
          animateOnce={true}
        >
          <a href="tel:+48534103127" class={classes.card}>
            <p>
              <AiFillPhone />
              Telefon: <span>+48 534103127</span>
            </p>
          </a>
          <a href={"mailto:ants.clean@gmail.com"} class={classes.card}>
            <p>
              <AiFillMail />
              E-mail: <span>ants.clean@gmail.com</span>
            </p>
          </a>
          <a
            href={"https://instagram.com/ants.clean"}
            target={"blank"}
            class={classes.card}
          >
            <p>
              <AiFillInstagram /> Instagram: <span>ants.clean</span>
            </p>
          </a>
          <a
            href={"https://www.facebook.com/ants.cleean.9"}
            class={classes.card}
            target={"blank"}
          >
            <p>
              <AiFillFacebook /> Facebook: <span>Ants Cleean</span>
            </p>
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
