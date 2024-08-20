import styles from '../Card.module.scss';
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { changeCardImage } from '../../../../utils/utils';
import { CardProps } from '../../../../configs/interfaces';
import { getRandomGesture } from '../../../../utils/utils';

export default function OpponentCard({
    opponentGesture, 
    setOpponentGesture,
    oppCard,
    setOppCard
}: CardProps) {
    const [timer, setTimer] = React.useState<number>(0); // in 0.1s

    useEffect(() => {
        if (setOpponentGesture) {
            const computerTimeout = setTimeout(() => {
                setOpponentGesture(getRandomGesture());
                setTimer(timer + 1);
            }, 100);

            return () => clearTimeout(computerTimeout);
        }
    },[timer]);

    useEffect(() => {
        if (opponentGesture && setOppCard) {
            let change = changeCardImage(opponentGesture);
            setOppCard(change);
        }
    },[opponentGesture]);

    return (
        <>
            {oppCard && 
                <div className={`${styles.card_ctn} ${oppCard.bgrColor}`}>
                    {oppCard.image && <FontAwesomeIcon icon={oppCard.image}/>}
                </div>}
        </>
    );
}