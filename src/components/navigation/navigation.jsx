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
      <div class={navClasses}>
        <div>Logo</div>
        <ul>
          <li>O nas</li>
          <li>Cennik</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
