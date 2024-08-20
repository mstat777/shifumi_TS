import styles from './Home.module.scss';
import React, { useEffect } from 'react';
import { faHand, faHandFist, faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { Gesture, Result } from '../../../configs/enums';
import { Card } from '../../../configs/types';
import NamePopup from '../../containers/NamePopup/Index';
import MainBtn from '../../containers/buttons/MainBtn/Index';
import ChoiceBtn from '../../containers/buttons/ChoiceBtn/Index';
import OpponentCard from '../../containers/cards/OpponentCard/Index';
import { getResult } from '../../../utils/utils';
import ChosenCardsCtn from '../../containers/ChosenCardsCtn/Index';
import ScoreCtn from '../../containers/ScoreCtn/Index';

export default function Home(){
    const [playerName, setPlayerName] = React.useState<string>("");
    const [showPopup, setShowPopup] = React.useState<boolean>(false);
    const [gameStarted, setGameStarted] = React.useState<boolean>(false);
    const [result, setResult] = React.useState<Result | undefined>(undefined);
    const [playerGesture, setPlayerGesture] = React.useState<Gesture | undefined>(undefined);
    const [opponentGesture, setOpponentGesture] = React.useState<Gesture | undefined>(undefined);
    const [disabledBtn, setDisabledBtn] = React.useState<boolean>(false);
    const [playerPoints, setPlayerPoints] = React.useState<number>(0);
    const [opponentPoints, setOpponentPoints] = React.useState<number>(0);

    const [plCard, setPlCard] = React.useState<Card>({
        image: faHand,
        bgrColor: {}
    });
    const [oppCard, setOppCard] = React.useState<Card>({
        image: faHand,
        bgrColor: {}
    });

    // initialize variables when starting a new game:
    function initializeGame(){
        setPlayerName("");
        setGameStarted(false);
        initializeRound();
        setPlayerPoints(0);
        setOpponentPoints(0);
    }

    // initialize before NEXT ROUND:
    function initializeRound(){
        setResult(undefined);
        setPlayerGesture(undefined);
        setOpponentGesture(undefined);
        setDisabledBtn(false);
    }

    // once player has made a choice, first disable buttons:
    useEffect(() => {
        if (playerGesture) {
            setDisabledBtn(true);
        }
    },[playerGesture]);

    // then show the result:
    useEffect(() => {
        if (disabledBtn) {
            setResult(getResult(playerGesture, opponentGesture));
        }
    },[disabledBtn]);

    // change the result in the result container:
    useEffect(() => {
        if (result) {
            switch(result) {
                case 'won': setPlayerPoints(playerPoints + 1); break;
                case 'drawn': break;
                case 'lost': setOpponentPoints(opponentPoints + 1); break;
                default: throw new Error("ERROR: result is undefined!!!");
            }
        }
    },[result]);

    return (
        <main id="home">
            <h1 className={styles.hidden}>home</h1>
            <section className={styles.home_section}>
                { !gameStarted ?
                    <>
                        <MainBtn type="button" 
                            text="play"
                            onClick={() => setShowPopup(true)}
                            className={styles.play_btn}/>
                        {showPopup && 
                            <NamePopup 
                                playerName={playerName} 
                                setPlayerName={setPlayerName} 
                                setShowPopup={setShowPopup}
                                onClick={() => setGameStarted(true)}/>
                        }
                    </> :
                    <>
                        <ScoreCtn 
                            playerName={playerName}
                            playerPoints={playerPoints}  
                            opponentPoints={opponentPoints}/>
                        <p className={styles.round_status_txt}>The round has {result ? "ended" : "started"}!</p>

                        { result && 
                            <>  
                                <ChosenCardsCtn 
                                    playerGesture={playerGesture} 
                                    opponentGesture={opponentGesture} 
                                    plCard={plCard}
                                    setPlCard={setPlCard}
                                    oppCard={oppCard}
                                    setOppCard={setOppCard}/>
                                <p className={styles.result_txt}>You have {result}</p>
                            </>
                        }

                        {!playerGesture &&
                            <>
                                <p>Computer's choice:</p>
                                <OpponentCard 
                                    opponentGesture={opponentGesture}          setOpponentGesture={setOpponentGesture}
                                    oppCard={oppCard}
                                    setOppCard={setOppCard}/>
                            </>
                        }

                        <p>Make your choice:</p>
                        <div className={styles.choice_ctn}>
                            <ChoiceBtn icon={faHandFist}
                                        onClick={() => setPlayerGesture(Gesture.Rock)}
                                        tooltip="rock" 
                                        className={styles.rock}
                                        disabled={disabledBtn}/>
                            <ChoiceBtn icon={faHand} 
                                        onClick={() => setPlayerGesture(Gesture.Paper)}
                                        tooltip="paper" 
                                        className={styles.paper}
                                        disabled={disabledBtn}/>
                            <ChoiceBtn icon={faHandScissors} 
                                        onClick={() => setPlayerGesture(Gesture.Scissors)}
                                        tooltip="scissors" 
                                        className={styles.scissors}
                                        disabled={disabledBtn}/>
                        </div>

                        { result && 
                            <div className={styles.nav_btn_ctn}>
                                <MainBtn type="button" 
                                    text="next round"
                                    onClick={initializeRound}
                                    className={styles.next_round_btn}/>
                                <MainBtn type="button" 
                                    text="new game"
                                    onClick={initializeGame}
                                    className={styles.new_game_btn}/>
                            </div>
                        }
                    </>
                }
            </section>
        </main>
    )
}