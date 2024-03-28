function upperCase(word) {
    return word.toUpperCase();
}

function  lowerCaseFunction(word) {
    return word.toLowerCase();
}

module.exports = {
 // upperCase: upperCase, // we are assigning the property upperCase to the function upperCase
    lowerCaseProperty: lowerCaseFunction, // we can name the property anything we want but usually same names are used 
    upperCase, // shorter syntax. property name and function must be the same name
}