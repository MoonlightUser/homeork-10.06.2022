// HOMEWORK TYMUR

// PART1
for (let i = 1; i < 24; i++) {
    // i know this is a bad solution but i want to try it by this way
    let output = i % 3 == 0 && i % 5 == 0 ? "Kirill demiGod" : (i % 5 == 0 ? "demiGod" : (i % 3 == 0 ? "Kirill" : i));
    console.log(output, `[${i}]`)
}

// PART2
//⬛(0), ⬜(1)
// take num from user
let userNum = parseInt(prompt("write how many squares of side do u want")) - 1 // -1 becouse cycle start from 0

// ok, know we create cycles and counter 
let i = 2;
let platorOutput = "" // our future output

for (let d = 0; d <= userNum; d++) { // height cycle
    i += userNum % 2 == 0 ? 0 : 1; // to make starts of strings diferent

    for (let c = 0; c <= userNum; c++, i++) { // widht cycle
        platorOutput += i % 2 == 0 ? "⬛" : "⬜"; // add our squeres
    }
    platorOutput += "\n"; // new line
}

console.log(platorOutput)
