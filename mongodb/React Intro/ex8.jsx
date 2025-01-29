import { useState } from "react";

function HitCounter() {
  const [hits, setHits] = useState(0);

  return <button onClick={() => setHits(hits++)}>Hit! Total: {hits}</button>;
}

export default HitCounter;

// Stellar work so far! However, it seems our game's hit counter isn't reacting as expected. The enthusiasm is there, but the hit total won't tally. Can you pinpoint what's gone wrong and fix it to accurately reflect each tap?
