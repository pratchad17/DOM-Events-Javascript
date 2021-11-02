function makeRed() {
    document.body.style.backgroundColor = "red";
}

/// handle blue button click by  setting function name

const blueButton = document.getElementById("make-blue-button");

//just set the name of the function
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = "blue";
}

//handle event by using annonymous function
const greenButton = document.getElementById("make-green-button");

//annonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = "green";
};

//handle by using addEventListener

const goldenButton = document.getElementById("make-goldenrod-button");
goldenButton.addEventListener("click", makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = "goldenrod";
}

//AddEventListenrt
const hotPinkButton = document.getElementById("make-hot-pink");
hotPinkButton.addEventListener("click", function () {
    document.body.style.backgroundColor = "hotpink";
});

//direct shotcut
document.getElementById("light-blue").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});
