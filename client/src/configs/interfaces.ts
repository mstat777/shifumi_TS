import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Gesture, CardType } from './enums';
import { Card } from './types';

export interface ButtonProps {
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"],
    text?: string,
    onClick?: () => void, 
    className: {}, 
    icon?: IconProp,  
    tooltip?: string,
    disabled?: boolean
}

export interface CardProps {
    cardType?: CardType,
    playerGesture?: Gesture, 
    opponentGesture?: Gesture,
    setOpponentGesture?: (val: Gesture) => void,
    gesture?: Gesture,
    plCard?: Card,
    setPlCard?: (val: Card) => void,
    oppCard?: Card,
    setOppCard?: (val: Card) => void,
}