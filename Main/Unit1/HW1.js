function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function countSignificantFigures(number) {
    return number.toString().replace(/^0*/, '').replace('.', '').length;
}

let randomNumber = getRandomNumber(0.0001, 1500);
let questionString = "How many significant figures are in " + randomNumber + "?"
let count = 0;


const questionPlaceholder = document.getElementById("pH");


if (count === 0) {
    questionPlaceholder.textContent = getRandomQuestion();
    count++;
}
