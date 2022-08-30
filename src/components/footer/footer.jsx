import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer class={classes.footer}>
      <div class={`container ${classes.footerContent}`}>
        <p style={{ fontWeight: "600" }}>Ants Clean &copy;</p>
        <p>Szczecin</p>
        <a href="tel:+48534103127">Tel: +48534103127</a>
        <a href="mailto:ants.clean@gmail.com">Mail: ants.clean@gmail.com</a>
        <a href="https://instagram.com/ants.clean" target={"blank"}>
          Instagram: ants.clean
        </a>
        <div>
          Site designed and programmed by{" "}
          <a href={"https://github.com/adam-podkowinski"} target={"blank"}>
            Adam Podkowiński
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
