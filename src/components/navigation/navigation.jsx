import classes from "./navigation.module.scss";
import { useEffect, useState } from "preact/hooks";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navClasses = `${classes.navigation} ${scrolled && classes.scrolled}`;

  return (
    <div class={classes.navWrapper}>
      <nav class={navClasses}>
        <a href={"#"}>Logo</a>
        <ul>
          <li>
            <a href="#">O nas</a>
          </li>
          <li>
            <a href="#">Cennik</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
