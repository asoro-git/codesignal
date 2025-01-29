import { useState } from "react";

function HealthMeter() {
  const [health, setHealth] = useState(100);

  return (
    <div>
      <p>Player Health: {health}</p>
      <button onClick={() => setHealth(health - 10)}>Take Damage</button>
      <button onClick={() => setHealth(100)}>Restore Health</button>
    </div>
  );
}

export default HealthMeter;


In our interactive gaming app, we're tracking the player's health. The code below represents a Health Meter that displays the player's health and allows them to simulate taking damage or restoring full health. Run the code to see the Health Meter in action!
