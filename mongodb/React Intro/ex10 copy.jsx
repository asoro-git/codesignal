import { use, useState } from "react";

// TODO: Create a TreasureCounter component that tracks the number of treasures found
const [counter, setCounter] = useState(0);
// TODO: Initialize a state variable 'treasures' that starts at 0
// TODO: Write the JSX that displays the treasure count and a button that increases the count
export default function TreasureCounter() {
	return (
		<h1>
			<button
				onClick={() => {
					setCounter((prev) => prev + 1);
				}}
			></button>
		</h1>
	);
}
// TODO: Define the button's onClick event handler to increase the treasure count
// Remember to export your TreasureCounter component at the end!
function Loginform() {
    const [details, setDetails] = useState({email:'', password: ''})
   return (

    
   )
}