
document.getElementById("nq").addEventListener("click", generateNewQuestion);
document.getElementById("revans").addEventListener("click", revealAnswer);
document.getElementById("submit").addEventListener("click", checkAnswer);



function getRandomNumberWithSigFigs(maxSigFigs) {
    let randomNumber = Math.random() * (5000 - 0.0001) + 0.0001;
    let roundedNumber = Number(randomNumber.toPrecision(maxSigFigs));
    let formattedNumber = roundedNumber.toFixed(maxSigFigs);
    return formattedNumber;
}

function generateNewQuestion() {
    let randomNumber = getRandomNumberWithSigFigs(7);
    let message = "How many significant figures are in " + randomNumber + "?";
    let questionElement = document.querySelector('#question p');
    questionElement.textContent = message;
}

function revealAnswer() {
    let randomNumber = parseFloat(document.querySelector('#question p').textContent.match(/\d+(\.\d+)?/)[0]);
    let sigFigCount = countSigFigs(randomNumber);
    let answerElement = document.querySelector('#question p');
    answerElement.textContent = "The answer is " + sigFigCount + " significant figures.";
}

function checkAnswer(event) {
    event.preventDefault();
    let inputNumber = parseFloat(document.getElementById("number").value);
    let randomNumber = parseFloat(document.querySelector('#question p').textContent.match(/\d+(\.\d+)?/)[0]);
    let sigFigCount = countSigFigs(randomNumber);

    let answerElement = document.querySelector('#question p');
    if (inputNumber === sigFigCount) {
        answerElement.textContent = "Correct answer!";
    } else {
        answerElement.textContent = "Incorrect answer!";
    }
}


function countSigFigs(number) {
    let numStr = number.toString();
    numStr = numStr.replace(/^0+/, '');
    let sigFigs = 0;
    let decimalFound = false;
    for (let i = 0; i < numStr.length; i++) {
        let char = numStr.charAt(i);
        if (char === '.') {
            decimalFound = true;
        } else if (char !== '0') {
            sigFigs++;
        }
        if (decimalFound && char === '0') {
            break;
        }
    }
    return sigFigs;
}