import styles from '../App.module.scss';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHand, faHandFist, faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { Gesture, Result } from '../configs/enums';

function getRandomGesture(){
    let a: number = Math.random()*3;
    if (a >= 0 && a <= 1) {
        return Gesture.Rock;
    } else if (a > 1 && a <= 2) {
        return Gesture.Paper;
    } else {
        return Gesture.Scissors;
    }
}

// determine the result of the round:
function getResult(player: Gesture | undefined, opponent: Gesture | undefined) {
    let result: Result;

    switch (player){ 
        case Gesture.Rock:
            switch (opponent){
                case Gesture.Rock: result = Result.Draw; break; 
                case Gesture.Paper: result = Result.Loss; break; 
                case Gesture.Scissors: result = Result.Win;  break; 
                default: throw new Error('Gesture Type is undefined!!!');
            }
            break;
        case Gesture.Paper:
            switch (opponent){
                case Gesture.Rock: result = Result.Win; break; 
                case Gesture.Paper: result = Result.Draw;  break; 
                case Gesture.Scissors: result = Result.Loss; break; 
                default: throw new Error('Gesture Type is undefined!!!');
            }
            break;  
        case Gesture.Scissors:
            switch (opponent){
                case Gesture.Rock: result = Result.Loss; break; 
                case Gesture.Paper: result = Result.Win; break; 
                case Gesture.Scissors: result = Result.Draw;  break; 
                default: throw new Error('Gesture Type is undefined!!!');
            }
            break; 
        default: throw new Error('Gesture Type is undefined!!!');
    }
    
    return result;
}

function changeCardImage(choice: Gesture){
    let result:{
        image: IconProp, 
        bgrColor: {}
    } = { 
        image: faHand, 
        bgrColor: {}
    };
    if (choice === Gesture.Rock) {
        result.image = faHandFist;
        result.bgrColor = styles.rock;
    } else if (choice === Gesture.Paper) {
        result.image = faHand;
        result.bgrColor = styles.paper;
    } else if (choice === Gesture.Scissors) {
        result.image = faHandScissors;
        result.bgrColor = styles.scissors;
    }
    return result;
}

// validate player's name input:
function validateInput(userData: string) {
    const result = { 
        isValid: true, 
        errorMsg: '' 
    }

    if (userData.length < 2 || userData.length > 16) {
        result.errorMsg +="Username too short/long.\n";
        result.isValid = false;
    }
    if (!/^[a-zàâçéèêëîïôûùüÿñæœ0-9 .'-]*$/i.test(userData)) {
        result.errorMsg +="The username should not contain special characters.";
        result.isValid = false;
    }

    return result;
}

export { getRandomGesture,
        getResult, 
        changeCardImage,
        validateInput }