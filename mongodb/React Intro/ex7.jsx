import { useState } from "react";

function GameScore() {
  const [hits, setHits] = useState(0);

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
