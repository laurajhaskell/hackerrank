// Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

// Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

// For example, if the string  and , the substring we consider is , the first characters of her infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Input Format

// The first line contains a single string, . 
// The second line contains an integer, .

// Constraints

// For  of the test cases, .
// Output Format

// Print a single integer denoting the number of letter a's in the first  letters of the infinite string created by repeating  infinitely many times.

// Sample Input 0

// aba
// 10
// Sample Output 0

// 7
// Explanation 0 
// The first  letters of the infinite string are abaabaabaa. Because there are  a's, we print  on a new line.

// Sample Input 1

// a
// 1000000000000
// Sample Output 1

// 1000000000000
// Explanation 1 
// Because all of the first  letters of the infinite string are a, we print on a new line.


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    if (!s.includes('a')) {
        return 0
    } else if (s.length === 1) {
        return n
    } else {
        var countTheAs = string => {
            let aCount = 0
            for (let i = 0; i < string.length; i++) {
                if (s[i] === 'a') {
                    aCount++
                }
            }
            return aCount
        }
        let multiplier = Math.floor(n / s.length)
        let excess = n % s.length
        let aCount = countTheAs(s)
        let aCountExcess = 0
        if (excess > 0) {
            let excessString = s.slice(0, excess)
            aCountExcess = countTheAs(excessString)
        }
        return aCount * multiplier + aCountExcess
    }



}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
