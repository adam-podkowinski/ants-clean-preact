import Hero from "@/components/hero/hero";
import Navigation from "@/components/navigation/navigation";
import classes from "./app.module.scss";
import About from "@/components/about/about";
import Pricing from "@/components/pricing/pricing";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export function App() {
  return (
    <div class={classes.app}>
      <div class={classes.background} />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Contact />
        <Footer />
      </main>
      <p style={{ height: "10rem" }}> LOL </p>
      <p style={{ height: "10rem" }}> LOL </p>
      <p style={{ height: "10rem" }}> LOL </p>
      <p style={{ height: "10rem" }}> LOL </p>
      <p style={{ height: "10rem" }}> LOL </p>
      <p style={{ height: "10rem" }}> LOL </p>
      <p style={{ height: "10rem" }}> LOL </p>
      <p style={{ height: "10rem" }}> LOL </p>
      <p style={{ height: "10rem" }}> LOL </p>
      <p style={{ height: "10rem" }}> LOL </p>
    </div>
  );
}
