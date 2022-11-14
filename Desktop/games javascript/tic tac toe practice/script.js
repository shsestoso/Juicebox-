const tiles = document.querySelectorAll(".tile");
const Player_X = "X";
const Player_O = "O";
let turn = Player_O;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]; 

let gameState = [
    "", "", "",
    "", "", "",
    "","", ""
];

tiles.forEach((tile)=> tile.addEventListener("click", tileClick))

function tileClick(event){
    let tile = event.target
    const tileNumber = tile.dataset.index;
     if(tile.innerText !=""){
        return;
     }
     if (turn === Player_O){
        tile.innerText = Player_O;
        gameState[tileNumber] = Player_O;
        turn = Player_X
     }
     else {tile.innerText = Player_X;
        gameState[tileNumber] = Player_X;
        turn = Player_O

     }
     const winner = checkWinner();
     handleWin(winner)
}

function checkWinner(){
    for (let i = 0; i <winningCombos.length; i++){
        let idxToCheck = winningCombos[i];
        let idx1 = gameState[idxToCheck[0]];
        let idx2= gameState[idxToCheck[1]];
        let idx3 = gameState[idxToCheck[2]];
        if (idx1 === idx2 && idx2 === idx3){
            return idx1
        }
        
    }
} 

const playerXpoints = document.getElementById("playerXpoints")
const playerOpoints = document.getElementById("playerOpoints")

function handleWin(winner){
    if (winner === "X"){
      let x_point= Number(playerXpoints.innerText) +1;
      playerXpoints.innerText= x_point;
    }
    if (winner ==="O"){
        let o_point= Number(playerOpoints.innerText)+1;
        playerOpoints.innerText = o_point;
    }
    else if (!winner){
        return "DRAW";
    }
}

const playAgainBtn = document.getElementById("playAgain");

playAgainBtn.addEventListener("click", function(){
    location.reload()
})
