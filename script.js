function createButtons() {
    let inputNrButtons  = document.getElementById("inputNrButtons").value;
    for (var i = 1; i <= inputNrButtons; ++i) {
        let button = document.createElement("button");
		button.innerHTML = i;
		button.setAttribute("id", i);
		document.body.appendChild(button);
    }
    let winnerButton = Math.floor(Math.random() * inputNrButtons + 1);
    checkWinnerButton(winnerButton, inputNrButtons);
}

function checkWinnerButton(winnerButton, inputNrButtons) { 
    for (let i = 1; i <= inputNrButtons; ++i) {
		document.getElementById(i).onclick = function () {
			if (winnerButton === i) {
                winningMessage.innerHTML += '<div id="winningMessage">' + "Congrats! You chose the Winner Button." + '</div>';     
            } else {
                winningMessage.innerHTML += '<div id="winningMessage">' + "Sorry! Maybe next time." + '</div>';  
            }  
		}
	}
}
