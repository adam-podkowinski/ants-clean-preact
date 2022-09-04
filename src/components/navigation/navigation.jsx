import classes from "./navigation.module.scss";
import { useEffect, useState } from "preact/hooks";
import { CgMenu, CgClose } from "react-icons/cg";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > window.innerHeight / 1.5);
  };
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navClasses = `${classes.navigation} ${scrolled && classes.scrolled}`;

  const navItems = (
    <ul class={open && classes.open}>
      <li>
        <a href={"#about"} onclick={closeMenu}>
          O nas
        </a>
      </li>
      <li>
        <a href={"#about"} onclick={closeMenu}>
          Oferta
        </a>
      </li>
      <li>
        <a href={"#pricing"} onclick={closeMenu}>
          Cennik
        </a>
      </li>
      <li>
        <a href={"#contact"} onclick={closeMenu}>
          Kontakt
        </a>
      </li>
    </ul>
  );

  const mobileMenu = (
    <>
      <button class={classes.mobileSwitch} onclick={() => setOpen(!open)}>
        {open ? <CgClose /> : <CgMenu />}
      </button>
    </>
  );

  return (
    <div class={classes.navWrapper}>
      <nav class={navClasses}>
        <a href={"#"} class={classes.logo}>
          <img src="logo.jpg" alt="Logo Ants Clean" />{" "}
          <strong>Ants Clean</strong>
        </a>
        {navItems}
        {mobileMenu}
      </nav>
    </div>
  );
};

export default Navigation;
