import Hero from "@/components/hero/hero";
import Navigation from "@/components/navigation/navigation";
import classes from "./app.module.scss";

export function App() {
  return (
    <div class={classes.app}>
      <Navigation />
      <div class={classes.background} />
      <Hero />
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
