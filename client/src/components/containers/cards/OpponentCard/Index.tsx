import styles from '../Card.module.scss';
import React, { useEffect } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand, faHandFist, faHandScissors } from '@fortawesome/free-solid-svg-icons';

interface Props {
    opponentChoice: string,
    setOpponentChoice: (val: string) => void
}

export default function OpponentCard({opponentChoice, setOpponentChoice}: Props) {
    const [timer, setTimer] = React.useState<number>(0); // in 0.1s
    const [image, setImage] = React.useState<IconProp>(faHandFist);
    const [bgrColor, setBgrColor] = React.useState<string>("styles.rock");

    useEffect(() => {
        const computerTimeout = setTimeout(() => {
            setOpponentChoice(getRandomHand());
            setTimer(timer + 1);
        }, 100);

        return () => clearTimeout(computerTimeout);
    },[timer]);

    useEffect(() => {
        function changeImage(){
            if (opponentChoice === "rock") {
                setImage(faHandFist);
                setBgrColor(styles.rock);
            } else if (opponentChoice === "paper") {
                setImage(faHand);
                setBgrColor(styles.paper);
            } else if (opponentChoice === "scissors") {
                setImage(faHandScissors);
                setBgrColor(styles.scissors);
            }
        }

        changeImage();
    },[opponentChoice]);

    function getRandomHand(){
        let a: number = Math.random()*3;
        let b: string = "";
        if (a >= 0 && a <= 1) {
            b = "rock";
        } else if (a > 1 && a <= 2) {
            b = "paper";
        } else if (a > 2 && a <= 3) {
            b = "scissors";
        }
        return b; 
    }

    return (
        <div className={`${styles.card_ctn} ${bgrColor}`}>
            <FontAwesomeIcon icon={image}/>
        </div>
    );
}