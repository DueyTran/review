function generateRange(min, max,  step) {
    let array = [];

    for (let i = min; i <= max; i += step) {
        array.push(i);
    }
    return array;
}

console.log(generateRange(2, 10, 2));
console.log(generateRange(1, 10, 3));
console.log(generateRange(10, 49, 5));

function alternateCase(str) { 
    let result = "";   
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
            result  += str[i].toUpperCase();
        }

        else {
            result += str[i].toLowerCase();
        }
    }

    return result;
}

console.log(alternateCase('hello world'));
console.log(alternateCase("HELLOW WORLD"));
console.log(alternateCase("hello WORLD"));



function authList(usernames) {
    for ( username of  usernames) {
        let hasNum = false; 
        let hasLower = false; 

        if (username.length < 6  || username.length > 10) {
            return false;
        }
        
        for  (let i = 0; i < username.length; i++) {                      
            let char = username.charCodeAt(i);

            if (char >= 48 && char <= 57) {
                hasNum = true;
            }
            else if (char >= 97 &&  char <=  122) {
                hasLower = true;
            }
            else if (!(char >= 65 && char <= 90)) {
                return false;
            }        
        }
        
        if (!hasNum || !hasLower) {
            return false;
        }      
    }

    return true;
}

console.log(authList(['john123', 'Aalex222', 'sandra1']));    // returns true
console.log(authList(['john123', 'alex222', 'sandraW']));    // returns false because sandraW has no number
console.log(authList(['john_123', 'alex222', 'sandra1']));   // returns false because john_123 contains an invalid character