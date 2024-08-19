import styles from '../Card.module.scss';
import React, { useEffect } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand, faHandFist, faHandScissors } from '@fortawesome/free-solid-svg-icons';

interface Props {
    choice: string
}

export default function GeneralCard({choice}: Props) {
    const [image, setImage] = React.useState<IconProp | null>(null);
    const [bgrColor, setBgrColor] = React.useState<{} | null>(null);

    useEffect(() => {
        function changeImage(){
            if (choice === "rock") {
                setImage(faHandFist);
                setBgrColor(styles.rock);
            } else if (choice === "paper") {
                setImage(faHand);
                setBgrColor(styles.paper);
            } else if (choice === "scissors") {
                setImage(faHandScissors);
                setBgrColor(styles.scissors);
            }
        }

        changeImage();
    },[]);

    return (
        image && bgrColor &&
            <div className={`${styles.card_ctn} ${bgrColor}`}>
                <FontAwesomeIcon icon={image}/>
            </div>
    );
}