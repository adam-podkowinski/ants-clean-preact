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
          offset={120}
          duration={0.4}
          animateOnce={true}
        >
          <div class={classes.grid}>
            <a href="tel:+48534103127" class={classes.card}>
              <div class={classes.contactName}>
                <AiFillPhone class={classes.contactIcon} />
                <p class={classes.contactText}>Telefon:</p>
              </div>
              <p class={classes.contactContent}>+48 534103127</p>
            </a>
            <a href={"mailto:ants.clean@gmail.com"} class={classes.card}>
              <div class={classes.contactName}>
                <AiFillMail class={classes.contactIcon} />
                <p class={classes.contactText}>E-mail:</p>
              </div>
              <p class={classes.contactContent}>ants.clean@gmail.com</p>
            </a>
            <a
              href={"https://instagram.com/ants.clean"}
              target={"blank"}
              class={classes.card}
            >
              <div class={classes.contactName}>
                <AiFillInstagram class={classes.contactIcon} />{" "}
                <p class={classes.contactText}>Instagram:</p>
              </div>
              <p class={classes.contactContent}>ants.clean</p>
            </a>
            <a
              href={"https://www.facebook.com/ants.cleean.9"}
              class={classes.card}
              target={"blank"}
            >
              <div class={classes.contactName}>
                <AiFillFacebook class={classes.contactIcon} />
                <p class={classes.contactText}>Facebook:</p>
              </div>
              <p class={classes.contactContent}>Ants Cleean</p>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
