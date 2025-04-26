import React, { useState } from 'react';
import one from './assets/1.svg';
import two from './assets/2.svg';
import three from './assets/3.svg';
import four from './assets/4.svg';
import five from './assets/5.svg';
import six from './assets/6.svg';
import seven from './assets/7.svg';
import eight from './assets/8.svg';
import nine from './assets/9.svg';

const Dice = () => {
    const [sides, setSides] = useState('');
    const [result, setResult] = useState(null);

    const images = { 1: one, 2: two, 3: three, 4: four, 5: five, 6: six, 7: seven, 8: eight, 9: nine };

    const handleRoll = () => {
        const sidesNumber = parseInt(sides, 10);
        if (sidesNumber >= 1 && sidesNumber <= 9) {
            const roll = Math.floor(Math.random() * sidesNumber) + 1;
            setResult(roll);
        } else {
            setResult('Please enter a number between 1 and 9.');
        }
    };

    return (
        <div>
            <input
                type="number"
                value={sides}
                onChange={(e) => setSides(e.target.value)}
                placeholder="Enter number of sides (1-9)"
                min="1"
                max="9"
            />
            <button onClick={handleRoll}><i className="fa-solid fa-dice"></i></button>
            {result !== null && typeof result === 'number' && (
                <div>
                    <p>Result: {result}</p>
                    <img src={images[result]} alt={`Dice face ${result}`} />
                </div>
            )}
            {typeof result === 'string' && <p>{result}</p>}
        </div>
    );
};

export default Dice;