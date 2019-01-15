// Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

// For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes  jumps while the second takes .

// Function Description

// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

// jumpingOnClouds has the following parameter(s):

// c: an array of binary integers
// Input Format

// The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .

// Constraints

// Output Format

// Print the minimum number of jumps needed to win the game.

// Sample Input 0

// 7
// 0 0 1 0 0 1 0
// Sample Output 0

// 4



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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let numJumps = 0;
    let i = 0;

    while (true) {
        if (i + 2 < c.length && c[i + 2] == 0) {
            i += 2;
        } else if (i + 1 < c.length) {
            i++;
        } else {
            break;
        }
        numJumps++;
    }
    return numJumps;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
