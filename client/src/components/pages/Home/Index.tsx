import styles from './Home.module.scss';
import React, { useEffect } from 'react';
import { faHand, faHandFist, faHandScissors } from '@fortawesome/free-solid-svg-icons';
import NamePopup from '../../containers/NamePopup/Index';
import MainBtn from '../../containers/buttons/MainBtn/Index';
import ChoiceBtn from '../../containers/buttons/ChoiceBtn/Index';
import OpponentCard from '../../containers/cards/OpponentCard/Index';
import { getResult } from '../../../utils/utils.js';
import ChosenCardsCtn from '../../containers/ChosenCardsCtn/Index';
import ScoreCtn from '../../containers/ScoreCtn/Index';

export default function Home(){
    const [playerName, setPlayerName] = React.useState<string>("");
    const [showPopup, setShowPopup] = React.useState<boolean>(false);
    const [gameStarted, setGameStarted] = React.useState<boolean>(false);
    const [result, setResult] = React.useState<string | null>(null);
    const [playerChoice, setPlayerChoice] = React.useState<string>('');
    const [opponentChoice, setOpponentChoice] = React.useState<string>('');
    const [disabledBtn, setDisabledBtn] = React.useState<boolean>(false);
    const [playerPoints, setPlayerPoints] = React.useState<number>(0);
    const [opponentPoints, setOpponentPoints] = React.useState<number>(0);

    // initialize variables when starting a new game:
    function initializeGame(){
        setPlayerName("");
        setGameStarted(false);
        setResult(null);
        setPlayerChoice('');
        setOpponentChoice('');
        setDisabledBtn(false);
        setPlayerPoints(0);
        setOpponentPoints(0);
    }

    // initialize before NEXT ROUND:
    function initializeRound(){
        setResult(null);
        setPlayerChoice('');
        setOpponentChoice('');
        setDisabledBtn(false);
    }

    // once player has made a choice, first disable buttons:
    useEffect(() => {
        if (playerChoice) {
            setDisabledBtn(true);
        }
    },[playerChoice]);

    // then show the result:
    useEffect(() => {
        if (disabledBtn) {
            setResult(getResult(playerChoice, opponentChoice));
        }
    },[disabledBtn]);

    // change the result in the result container:
    useEffect(() => {
        if (result) {
            switch(result) {
                case 'won': setPlayerPoints(playerPoints + 1); break;
                case 'drawn': break;
                case 'lost': setOpponentPoints(opponentPoints + 1); break;
                default: console.log("ERROR: result!!!");
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
                                    playerChoice={playerChoice} 
                                    opponentChoice={opponentChoice} />
                                <p className={styles.result_txt}>You have {result}</p>
                            </>
                        }

                        {!playerChoice && 
                            <>
                                <p>Computer's choice:</p>
                                <OpponentCard 
                                    opponentChoice={opponentChoice}          setOpponentChoice={setOpponentChoice}/>
                            </>
                        }

                        <p>Make your choice:</p>
                        <div className={styles.choice_ctn}>
                            <ChoiceBtn icon={faHandFist}
                                        onClick={() => setPlayerChoice("rock")}
                                        tooltip="rock" 
                                        className={styles.rock}
                                        disabled={disabledBtn}/>
                            <ChoiceBtn icon={faHand} 
                                        onClick={() => setPlayerChoice("paper")}
                                        tooltip="paper" 
                                        className={styles.paper}
                                        disabled={disabledBtn}/>
                            <ChoiceBtn icon={faHandScissors} 
                                        onClick={() => setPlayerChoice("scissors")}
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