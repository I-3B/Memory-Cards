import '../style/PlayBoard.css';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import uniqid from 'uniqid';
const CARDS_MAX_SIZE = 48;
const CARDS_START_SIZE=4;
const PlayBoard = (props) => {
    const [cardCounter, setCardCounter] = useState(0);
    const [totalCardCounter, setTotalCardCounter] = useState(0);
    const [cardsSize, setCardsSize] = useState(CARDS_START_SIZE);
    const [cards, setCards] = useState([]);

    const gameOver = () => {
        setCardCounter(0);
        setTotalCardCounter(0);
        setCardsSize(CARDS_START_SIZE);
        setCards(getNewCards(CARDS_START_SIZE));
    };

    const shuffleCards = (cards) => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    };

    const isCardClickedAlreadyCallback = (cardBoolean) => {
        if (cardBoolean) gameOver();
        else {
            setCardCounter((cardCounter) => cardCounter + 1);
            setTotalCardCounter((totalCardCounter) => totalCardCounter + 1);
        }
    };

    const getNewCards = (cardsSize) => {
        let usedImages = [];
        let cards = [];
        for (let i = 0; i < cardsSize; i++) {
            let newImage = Math.floor(Math.random() * CARDS_MAX_SIZE) + 1;
            while (usedImages.includes(newImage))
                newImage = Math.floor(Math.random() * CARDS_MAX_SIZE) + 1;
            usedImages.push(newImage);
            cards.push(
                <Card
                    key={uniqid()}
                    image={newImage}
                    isCardClickedAlready={isCardClickedAlreadyCallback}
                />
            );
        }
        return cards;
    };

    const nextTurn = () => {
        setCardCounter(0);
        setCardsSize(Math.floor(cardsSize * 1.5));
        setCards(getNewCards(cardsSize));
    };

    useEffect(() => {
        setCards(getNewCards(cardsSize));
    }, []);
    useEffect(() => {
        shuffleCards(cards);
        props.score(totalCardCounter);
        if (cardCounter === cardsSize) nextTurn();
    });
    useEffect(() => {
        if (cardsSize > CARDS_MAX_SIZE) setCardsSize(CARDS_MAX_SIZE);
        setCards(getNewCards(cardsSize));
    }, [cardsSize]);

    return <div id="play-board">{cards}</div>;
};
export default PlayBoard;
