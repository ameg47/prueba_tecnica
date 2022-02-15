/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */

const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`)

/**
 * Check if a string has correct use of parenthesis.
 * 
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */

function parenthesisChecker(str) {
  const brackets={
    "(":")",
    "[":"]",
    "{":"}"
  }
  const openBrackets = [];
  
  for (let i = 0; i < str.length; i++) {
      if (brackets[str[i]]) {
        openBrackets.push(str[i]);
      } 
      else if (Object.values(brackets).includes(str[i]) && brackets[openBrackets.pop()] !== str[i]) {
        return false;
      }
  }

  return true;
}

const isValid = parenthesisChecker(args.toString());
console.log(`parenthesisChecker("${args}") = ${isValid}`);

