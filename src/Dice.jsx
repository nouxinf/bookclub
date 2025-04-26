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
import ten from './assets/10.svg';
import eleven from './assets/11.svg';
import twelve from './assets/12.svg';
import thirteen from './assets/13.svg';
import fourteen from './assets/14.svg';
import fifteen from './assets/15.svg';
import sixteen from './assets/16.svg';
import seventeen from './assets/17.svg';
import eighteen from './assets/18.svg';
import nineteen from './assets/19.svg';
import twenty from './assets/20.svg';
import './styles/Dice.css';

const Dice = () => {
    const [sides, setSides] = useState('');
    const [result, setResult] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);
    const [rolling, setRolling] = useState(false);

    const images = [
        one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty
    ];

    const handleRoll = () => {
        const sidesNumber = parseInt(sides, 10);
        if (sidesNumber >= 1 && sidesNumber <= images.length) {
            setRolling(true);
            let roll = Math.floor(Math.random() * sidesNumber) + 1;

            // Simulate slot machine-like rolling through dice faces
            let counter = 0;
            const interval = setInterval(() => {
                const randomIndex = Math.floor(Math.random() * sidesNumber);
                setCurrentImage(images[randomIndex]);
                counter++;
                if (counter > 15) { // Stop after 15 iterations
                    clearInterval(interval);
                    setCurrentImage(images[roll - 1]);
                    setResult(roll);
                    setRolling(false);
                }
            }, 100); // Change image every 100ms
        } else {
            setResult('Please enter a number between 1 and 20.');
        }
    };

    return (
        <div>
            <input
                type="number"
                value={sides}
                onChange={(e) => setSides(e.target.value)}
                placeholder="Enter number of sides (1-20)"
                min="1"
                max="20"
            />
            <button onClick={handleRoll} disabled={rolling}>Roll</button>
            {currentImage && (
                <div className="dice-container">
                    <img src={currentImage} alt="Rolling dice" className="dice" />
                </div>
            )}
            {result !== null && typeof result === 'string' && <p>{result}</p>}
        </div>
    );
};

export default Dice;