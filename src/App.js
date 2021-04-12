import React, { useState } from 'react';
import PlayBoard from './component/PlayBoard';
import Scores from './component/Scores';
import './App.css';
let bestScore = JSON.parse(localStorage.getItem('best-score'));
if (bestScore === null) bestScore = 0;
const App = () => {
    const [score, setScore] = useState(0);
    const getScore = (newScore) => {
        if (newScore > bestScore) {
            bestScore = newScore;
            localStorage.setItem('best-score', JSON.stringify(bestScore));
        }
        setScore(newScore);
    };
    return (
        <div id="app">
            <Scores score={score} bestScore={bestScore} />
            <PlayBoard score={getScore} />
        </div>
    );
};
export default App;
