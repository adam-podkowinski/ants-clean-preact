import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer class={classes.footer}>
      <div class={`container ${classes.footerContent}`}>
        <strong style={{ fontWeight: "600" }}>Ants Clean&copy; Szczecin</strong>
        <a href="tel:+48534103127">Tel: +48534103127</a>
        <a href="mailto:ants.clean@gmail.com">Mail: ants.clean@gmail.com</a>
        <a href="https://instagram.com/ants.clean" target={"blank"}>
          Instagram: ants.clean
        </a>
        <div>
          CEO:{" "}
          <a
            href={"https://www.instagram.com/aleksander_pawlowski_"}
            target={"blank"}
          >
            Aleksander&nbsp;Pawłowski
          </a>
        </div>
        <div>
          Site designed and programmed by{" "}
          <a href={"https://github.com/adam-podkowinski"} target={"blank"}>
            Adam&nbsp;Podkowiński
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
