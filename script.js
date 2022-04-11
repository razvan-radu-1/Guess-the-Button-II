function createButtons() {
    let numberOfButtons  = document.getElementById("numberOfButtons").value;
    for (let i = 1; i <= numberOfButtons; ++i) {
        let button = document.createElement("button");
	button.innerHTML = i;
	button.setAttribute("id", i);
	document.body.appendChild(button);
    }
    let winnerButton = Math.floor(Math.random() * numberOfButtons + 1);
    checkWinnerButton(winnerButton, numberOfButtons);
}

function checkWinnerButton(winnerButton, numberOfButtons) {
    for (let i = 1; i <= numberOfButtons; ++i) {
	document.getElementById(i).onclick = function () {
	    if (winnerButton === i) {
                winningMessage.innerHTML += '<div id="winningMessage">' + "Congrats! You chose the Winner Button." + '</div>';     
            } else {
            	winningMessage.innerHTML += '<div id="winningMessage">' + "Sorry! Maybe next time." + '</div>';  
            }  
	}
    }
}
