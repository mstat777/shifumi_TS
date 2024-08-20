import styles from '../Card.module.scss';
import React, { useEffect } from 'react';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import { CardProps } from '../../../../configs/interfaces';
import { CardType } from '../../../../configs/enums';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { changeCardImage } from '../../../../utils/utils';

export default function GeneralCard({
    cardType,
    gesture, 
    plCard,
    setPlCard,
    oppCard,
    setOppCard
}: CardProps) {

    const [change, setChange] = React.useState<{
        image: IconProp, 
        bgrColor: {}
    }>({ 
        image: faHand, 
        bgrColor: {}
    });

    useEffect(() => {
        if (gesture) {
            setChange(changeCardImage(gesture));
        }
    },[]);

    useEffect(() => {
        if (setPlCard && cardType === CardType.Player) {
            setPlCard(change);
        } 
        else if (setOppCard && cardType === CardType.Opponent) {
            setOppCard(change);
        }
    },[change]);

    return (
        <>
            {plCard && cardType === CardType.Player &&
                <div className={`${styles.card_ctn} ${plCard.bgrColor}`}>
                    <FontAwesomeIcon icon={plCard.image as IconProp}/>
                </div>
            }
            {oppCard && cardType === CardType.Opponent &&
                <div className={`${styles.card_ctn} ${oppCard.bgrColor}`}>
                    <FontAwesomeIcon icon={oppCard.image as IconProp}/>
                </div>
            }
        </>
    );
}