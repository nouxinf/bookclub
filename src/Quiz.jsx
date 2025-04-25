import React, { useState } from 'react';

const Quiz = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [quizData, setQuizData] = useState(() => {
        const savedData = localStorage.getItem('quizData');
        return savedData ? JSON.parse(savedData) : [];
    });
    const [isMinimized, setIsMinimized] = useState(false);

    const handleSave = () => {
        const newQuizData = [...quizData, { question, answer }];
        setQuizData(newQuizData);
        localStorage.setItem('quizData', JSON.stringify(newQuizData));
        setQuestion('');
        setAnswer('');
    };

    const handleClear = () => {
        setQuizData([]);
        localStorage.removeItem('quizData');
    };

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', width: '300px' }}>
            <button onClick={toggleMinimize}>
                {isMinimized ? 'Expand' : 'Minimize'}
            </button>
            {!isMinimized && (
                <>
                    <h3>Create a Quiz</h3>
                    <div>
                        <label>
                            Question:
                            <input
                                type="text"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Answer:
                            <input
                                type="text"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            />
                        </label>
                    </div>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleClear}>Clear All</button>
                    <h4>Saved Questions:</h4>
                    <ul>
                        {quizData.map((item, index) => (
                            <li key={index}>
                                <strong>Q:</strong> {item.question} <br />
                                <strong>A:</strong> {item.answer}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default Quiz;