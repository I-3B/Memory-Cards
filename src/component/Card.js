import { useState } from 'react';
import '../style/Card.css';
const Card = (props) => {
    const [cardClicked, setCardClicked] = useState(false);
    return (
        <div
            id="card"
            onClick={() => {
                props.isCardClickedAlready(cardClicked);
                setCardClicked(true);
            }}
        >
            <img
                src={'Animals/' + props.image + '.svg'}
                alt="animal"
                draggable={false}
            />
        </div>
    );
};
export default Card;
