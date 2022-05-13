let a = "chess";

let pieces = a.toLowerCase();

if(pieces === "pawn"){
    console.log("Moves forward just one square unless it is that pawn's first move. In this case, then it can move one or two squares");
} else if(pieces === "knight"){
    console.log("Moves in L");
} else if(pieces === "bishop"){
    console.log("Moves in diagonals");
}else if(pieces === "rook"){
    console.log("Moves in lignes and collums");
} else if(pieces === "queen"){
    console.log("Moves in any direction, but it has not limit of squares");
} else if (pieces === "king") {
    console.log("Moves in any direction, but just one square");
} else {
    console.log("Please enter a valid chess piece");
}


