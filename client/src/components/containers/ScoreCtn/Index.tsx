import styles from './ScoreCtn.module.scss';

interface Props {
    playerName: string,
    playerPoints: number,
    opponentPoints: number
}

export default function ScoreCtn({ 
    playerName, 
    playerPoints, 
    opponentPoints }: Props) {

    return (
        <div className={styles.score_ctn}>
            <p>{playerName}</p>
            <p className={styles.score_player}>{playerPoints}</p>
            <p>:</p>
            <p className={styles.score_computer}>{opponentPoints}</p>
            <p>computer</p>
        </div>
    )
}