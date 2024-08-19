import styles from './ChosenCardsCtn.module.scss';
import GeneralCard from '../cards/GeneralCard/Index';

interface Props {
    playerChoice: string, 
    opponentChoice: string
}

export default function ChosenCardsCtn({ playerChoice, opponentChoice }: Props) {
    return (
        <div className={styles.chosen_cards_ctn}>
            <div>
                <p>You:</p>
                <GeneralCard choice={playerChoice} />
            </div>
            <p>VS</p>
            <div>
                <p>Computer:</p>
                <GeneralCard choice={opponentChoice} />
            </div>
        </div>
    );
}