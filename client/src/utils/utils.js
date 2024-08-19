// determine the result of the round:
function getResult(player, opponent) {
    let result = '';

    switch (player){ 
        case 'rock':
            switch (opponent){
                case 'rock': result="drawn"; break; 
                case 'paper': result="lost"; break; 
                case 'scissors': result="won"; break; 
                default: result="ERROR!!!"; break;
            }
            break;
        case 'paper':
            switch (opponent){
                case 'rock': result="won"; break; 
                case 'paper': result="drawn"; break; 
                case 'scissors': result="lost"; break; 
                default: result="ERROR!!!"; break;
            }
            break;  
        case 'scissors':
            switch (opponent){
                case 'rock': result="lost"; break; 
                case 'paper': result="won"; break; 
                case 'scissors': result="drawn"; break; 
                default: result="ERROR!!!"; break;
            }
            break; 
        default: result="ERROR!!!"; 
    }
    
    return result;
}

// validate player's name input:
function validateInput(userData) {
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

export { getResult, validateInput }