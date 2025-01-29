import { useState } from "react";

function GameScore() {
  const [hits, setHits] = useState(5);

  const handleHit = () => {
    setHits((hits) => hits + 1);
  };

  return (
    <div>
      <h1>Alien hits: {hits}</h1>
      <button onClick={handleHit}>Hit the alien!</button>
    </div>
  );
}

export default GameScore;

// Excellent progress, Space Voyager! Your current app tracks the number of hits on an alien. Now, can you adjust the starting number of hits to 5 instead of 0? This will simulate a scenario in which the game begins with a few hits already scored. Take a leap into state management with useState!
