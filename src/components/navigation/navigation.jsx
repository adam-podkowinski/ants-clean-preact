import classes from "./navigation.module.scss";
import { useEffect, useState } from "preact/hooks";
import { CgMenu, CgClose } from "react-icons/cg";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > window.innerHeight);
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
        <a href="#" onclick={closeMenu}>
          Cennik
        </a>
      </li>
      <li>
        <a href="#" onclick={closeMenu}>
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
        <a href={"#"}>Logo</a>
        {navItems}
        {mobileMenu}
      </nav>
    </div>
  );
};

export default Navigation;
