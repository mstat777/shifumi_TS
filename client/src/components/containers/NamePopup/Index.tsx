import styles from './NamePopup.module.scss';
import React, { useEffect } from 'react';
import { validateInput } from '../../../utils/utils';
import MainBtn from '../buttons/MainBtn/Index';

interface Props {
    playerName: string,
    setPlayerName: (val: string) => void,
    setShowPopup: (val: boolean) => void,
    onClick: () => void
}

export default function NamePopup({
    playerName, 
    setPlayerName,
    setShowPopup, 
    onClick}: Props){

    // error messages:
    const [errMsg, setErrMsg] = React.useState<string>('');

    useEffect(() => {
        setPlayerName('');
    },[]);

    // if form is valid, then start game
    function validateForm() {
        const nameVerif = validateInput(playerName.trim());
        setErrMsg(nameVerif.errorMsg);
        nameVerif.isValid && onClick();
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErrMsg('');
        validateForm();
    }
    
    return (
        <div className={styles.popup_ctn}>
            <div className={styles.popup}>
                <form onSubmit={handleSubmit} className={styles.popup_form}>
                    <label>Please enter your name:
                        <input type="text" 
                                name="username" 
                                placeholder="Your name"
                                value={playerName}
                                onChange={(e) => setPlayerName(e.target.value)}
                                onFocus={() => setErrMsg('')}
                                className={styles.username_txt}
                                maxLength={16}
                                required/>
                    </label>
                    { errMsg && 
                        <p className={styles.err_msg}>{errMsg}</p>
                    }

                    <MainBtn 
                        type="submit"
                        text="play"
                        className={styles.submit_btn}/>
                </form>

                <button 
                    type="button"
                    className={styles.close_popup_btn} 
                    onClick={() => setShowPopup(false)}>
                        X
                </button>
            </div>
        </div>
    )
}