import React from 'react';
import Confetti from 'react-confetti';

const ConfettiEffect = () => {
    const [showConfetti, setShowConfetti] = React.useState(false);

    const handleButtonClick = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 15000); // Confetti lasts for 3 seconds
    };

    return (
        <div>
            <button onClick={handleButtonClick}><i className="fa-solid fa-cake-candles"></i></button>
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={5000} />}
        </div>
    );
};

export default ConfettiEffect;