import styles from './ChosenCardsCtn.module.scss';
import GeneralCard from '../cards/GeneralCard/Index';
import { CardProps } from '../../../configs/interfaces';
import { CardType } from '../../../configs/enums';

export default function ChosenCardsCtn({ 
    playerGesture, 
    opponentGesture,
    plCard,
    setPlCard,
    oppCard,
    setOppCard
}: CardProps) {

    return (
        <div className={styles.chosen_cards_ctn}>
            <div>
                <p>You:</p>
                <GeneralCard cardType={CardType.Player}
                    gesture={playerGesture} 
                    plCard={plCard}
                    setPlCard={setPlCard}/>
            </div>
            <p>VS</p>
            <div>
                <p>Computer:</p>
                <GeneralCard cardType={CardType.Opponent}
                    gesture={opponentGesture} 
                    oppCard={oppCard}
                    setOppCard={setOppCard}/>
            </div>
        </div>
    );
}