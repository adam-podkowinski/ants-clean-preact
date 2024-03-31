import classes from "./footer.module.scss";

const Footer = () => {
    return (
        <footer class={classes.footer}>
            <div class={`container ${classes.footerContent}`}>
                <strong style={{ fontWeight: "600" }}>Pawlowsky &amp; Garden&copy; Szczecin</strong>
                <div>Tel: <a href="tel:+48534103127">+48534103127</a></div>
                <div>Mail: <a href="mailto:pawlowskyandgarden@gmail.com">pawlowskyandgarden@gmail.com</a></div>
                <div>
                    Instagram: <a href="https://instagram.com/pawlowsky_and_garden" target={"blank"}>
                        pawlowsky_and_garden
                    </a>
                </div>
                <div>
                    Właściciele:{" "}
                    <br/>
                    <a
                        href={"https://www.instagram.com/aleksander_pawlowski_"}
                        target={"blank"}
                    >
                        Aleksander&nbsp;Pawłowski
                    </a>
                    <br/>
                    <a
                        href={"https://instagram.com/krzysztofnijaki_"}
                        target={"blank"}
                    >
                        Krzysztof&nbsp;Nijaki
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
