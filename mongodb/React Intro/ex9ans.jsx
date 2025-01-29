import { useState } from "react";

function HealthBar() {
  // TODO: Initialize the health state to represent the player's health at the start of the game.
  const [health, setHealth] = useState(100);
  // TODO: Create a div styled as a green bar to represent the current health. The width of the bar should match the health.
  if (health > 0) {
    return (
      <div
        style={{
          backgroundColor: "green",
          height: "10px",
          width: `${5 * health}px`,
          transition: "all 1s",
        }}
      >
        <br />
        <button
          onClick={() => {
            setHealth((prev) => prev - 5);
          }}
        >
          Damage 5 health
        </button>
        <p> </p>
        <button
          onClick={() => {
            setHealth((prev) => prev + 5);
          }}
        >
          Restore 5 health
        </button>
      </div>
    );
  } else {
    return (
      <h1>
        VICTORY!!!!!! CONGRATSSSS
        <br />
        <button onClick={() => setHealth(100)}>Restart?</button>
      </h1>
    );
  }
}

export default HealthBar;

// Fantastic progress, Space Voyager! Now, conjure up a Health Bar for our game. Start by setting the initial health, and then ensure that the bar visually represents this health.
