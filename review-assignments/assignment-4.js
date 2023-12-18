function stringTimes(string, int) {
    let count = "";

    for (let i = 0; i < int; i++) {
        count += string;
    }
    return count;
}

console.log(stringTimes("UP", 10));


function everyOther(word) {
    let output = "";

    for  (let i = 0; i < word.length; i += 2) {        
        output += word[i];
    }
    return output;
}

console.log(everyOther("wtwtwtwtdddd"));


function caughtSpeeding(speed, birthday) {
    if (speed <= 60 && !birthday) {
        return 0;
    }
    else if (speed >= 61 && speed <= 80 && !birthday) {
        return 1;
    }
    else if (speed >= 81 && !birthday) {
        return 2;
    }
    else if (speed <= 65 && birthday) {
        return 0;
    }
    else if (speed >= 66 && speed <= 85 && birthday) {
        return 1
    }
    else if (speed >= 86 && birthday) {
        return 2;
    }

}

console.log(caughtSpeeding(60, false)); // → 0
console.log(caughtSpeeding(65, false)); // → 1
console.log(caughtSpeeding(65, true)); // → 0

console.log(caughtSpeeding(85, false));
console.log(caughtSpeeding(85, true));
