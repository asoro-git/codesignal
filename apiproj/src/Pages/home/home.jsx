import Card from "./cards";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Welcome to my homepage</h1>
      <h1>Who am I?</h1>
      <h2>What are my hobbies?</h2>
      <section className="gap-y10">
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}
