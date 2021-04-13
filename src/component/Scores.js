import { useEffect, useState } from 'react';
import '../style/Scores.css';
const Scores = (props) => {
    const [animationClassScore, setAnimationClassScore] = useState('');
    const [animationClassBestScore, setAnimationClassBestScore] = useState('');
    const [message, setMessage] = useState(
        "Click any animal that you didn't click already"
    );
    useEffect(() => {
        setAnimationClassScore('text-animation');
        setTimeout(() => {
            setAnimationClassScore('');
        }, 100);
    }, [props.score]);
    useEffect(() => {
        setAnimationClassBestScore('text-animation');
        setTimeout(() => {
            setAnimationClassBestScore('');
        }, 100);
    }, [props.bestScore]);
    return (
        <div id="scores">
            <div id="best-score">
                <span>Best score:</span>
                <span className={animationClassBestScore}>
                    {props.bestScore}
                </span>
            </div>
            <div id="current-score">
                <span>Score:</span>
                <span className={animationClassScore}>{props.score}</span>
            </div>
            <div id="message">{message}</div>
        </div>
    );
};
export default Scores;
