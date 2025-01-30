import { useState } from "react";

export default function TreasureCounter() {
	// TODO: Create a TreasureCounter component that tracks the number of treasures found
	// TODO: Initialize a state variable 'treasures' that starts at 0
	const [counter, setCounter] = useState(0);

	// TODO: Write the JSX that displays the treasure count and a button that increases the count
	return (
		<h1>
			nubmer of treasure: {counter}
			<br />
			<button
				onClick={() => {
					setCounter((prev) => prev + 1);
				}}
			>
				add treasure count
			</button>
		</h1>
	);
	// TODO: Define the button's onClick event handler to increase the treasure count
	// Remember to export your TreasureCounter component at the end!
}
