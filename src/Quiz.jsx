import React, { useState } from 'react';
import "./styles/Quiz.css"
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

    const saveAsJsonFile = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(quizData, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "quizData.json");
        document.body.appendChild(downloadAnchorNode); // required for Firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    const loadFromJsonFile = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const loadedData = JSON.parse(e.target.result);
                    setQuizData(loadedData);
                    localStorage.setItem('quizData', JSON.stringify(loadedData));
                } catch (error) {
                    alert('Invalid JSON file');
                }
            };
            reader.readAsText(file);
        }
    };

    return (
        <div style={{ border: '1px solid #ccc', width: '300px' }}>
            <button onClick={toggleMinimize}>
                {isMinimized ? 'Expand' : 'Minimize'}
            </button>
            <button onClick={saveAsJsonFile}>Save as JSON</button>
            <input
                type="file"
                accept="application/json"
                onChange={loadFromJsonFile}
                style={{ marginTop: '10px' }}
            />
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

                    <h4>Saved Questions:</h4>
                    <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>Total: {quizData.length}</p>
                    <ul>
                        {quizData.map((item, index) => (
                            <li key={index} className="quiz-item">
                                <div className="qa-text">
                                <strong>Q:</strong> {item.question} <br/>
                                <strong>A:</strong> {item.answer}
                                </div>
                                <button
                                    className="del-btn"
                                    onClick={() => {
                                        const newQuizData = quizData.filter((_, i) => i !== index);
                                        setQuizData(newQuizData);
                                        localStorage.setItem('quizData', JSON.stringify(newQuizData));
                                    }}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default Quiz;