import React, { useState } from 'react'; // Import React and useState hook for managing state
import { DiceRoller } from '@dice-roller/rpg-dice-roller'; // Import DiceRoller library for rolling dice

const Dice = () => {
    // State to store the number of sides entered by the user
    const [sides, setSides] = useState('');
    // State to store the result of the dice roll
    const [result, setResult] = useState(null);

    // Function to handle the dice roll
    const handleRoll = () => {
        if (sides > 0) { // Check if the entered number of sides is valid
            const roller = new DiceRoller(); // Create a new DiceRoller instance
            const roll = roller.roll(`1d${sides}`); // Roll a dice with the specified number of sides
            setResult(roll.total); // Update the result state with the roll total
        } else {
            setResult('Please enter a valid number of sides.'); // Set an error message for invalid input
        }
    };

    return (
        <div>
            {/* Input field for the user to enter the number of sides */}
            <input
                type="number"
                value={sides}
                onChange={(e) => setSides(e.target.value)} // Update sides state on input change
                placeholder="Enter number of sides"
            />
            {/* Button to trigger the dice roll */}
            <button onClick={handleRoll}>Roll</button>
            {/* Display the result of the dice roll */}
            <p>{result !== null && `Result: ${result}`}</p>
        </div>
    );
};

export default Dice; // Export the Dice component