// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

// For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.

// Function Description

// Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.

// countingValleys has the following parameter(s):

// n: the number of steps Gary takes
// s: a string describing his path
// Input Format

// The first line contains an integer , the number of steps in Gary's hike. 
// The second line contains a single string , of  characters that describe his path.

// Constraints

// Output Format

// Print a single integer that denotes the number of valleys Gary walked through during his hike.

// Sample Input

// 8
// UDDDUDUU
// Sample Output

// 1
// Explanation

// If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:

// _/\      _
//    \    /
//     \/\/
// He enters and leaves one valley.


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

// Complete the countingValleys function below.
function countingValleys(n, s) {
    //variables for mountain and valley steps and altitude level
    var mountainSteps = 0, valleySteps = 0, currentLevel = 0;
    //array to hold string of 'U' or 'D' steps
    var stepHistory = [];
    //loop over character in string path
    for (var i = 0; i < s.length; i++) {
        //if character is U, increase mountain steps and level by one
        if (s[i] === 'U') {
            mountainSteps++;
            currentLevel++;
            //push current level to step history
            stepHistory.push(currentLevel);
        //if character is D, increase valley steps by one and decrease level by one
        } else if (s[i] === 'D') {
            valleySteps++;
            currentLevel--;
            //push current level to step history
            stepHistory.push(currentLevel);
        }
    }
    //variable to hold valleys counted
    var valleyCount = 0;
    //loop over step history
    for (var i = 0; i < stepHistory.length; i++) {
        //increase valley count by one
        if (stepHistory[i] === 0 && stepHistory[i - 1] < 0) {
            valleyCount++;
        }
    }
    return valleyCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
