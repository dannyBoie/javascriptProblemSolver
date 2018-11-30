var SLIDE_1 =     "Slide 1";   // move names
var SLIDE_2 =     "Slide 2";
var SLIDE_3 =     "Slide 3";
var SLIDE_4 =     "Slide 4";
var SLIDE_5 =     "Slide 5";
var SLIDE_6 =     "Slide 6";
var SLIDE_7 =     "Slide 7";
var SLIDE_8 =     "Slide 8";

function PuzzleMover() {
        this.doMove = function (move, state) {  
var next;                     
switch (move) {                     
        case SLIDE_1: next = slideTile1(state); break;
        case SLIDE_2: next = slideTile2(state); break;
        case SLIDE_3: next = slideTile3(state); break;
        case SLIDE_4: next = slideTile4(state); break;
        case SLIDE_5: next = slideTile5(state); break;
        case SLIDE_6: next = slideTile6(state); break;
        case SLIDE_7: next = slideTile7(state); break;
        case SLIDE_8: next = slideTile8(state); break;
        default: alert("Error in doMove for Puzzle"); 
}
if (next === null)
   return null;
return next;
    };
}

function slideTile1(state) {
    var puzzleState = state;
    var currentLocation = puzzleState.getLocation(1);
    var emptyLocation = puzzleState.getLocation(0);
    var nextState;
    var boolean = false;
    if(currentLocation.column === emptyLocation.column && currentLocation.row + 1 === emptyLocation.row) {   
        boolean = true;
    }
    else if(currentLocation.column === emptyLocation.column && currentLocation.row - 1 === emptyLocation.row) {
        boolean = true;
    }
    else if(currentLocation.row === emptyLocation.row && currentLocation.column + 1 === emptyLocation.column) {
        boolean = true;
    }
    else if(currentLocation.row === emptyLocation.row && currentLocation.column - 1 === emptyLocation.column) {
        boolean = true;
    }
    if(boolean === true) {
        nextState = puzzleState.swap(currentLocation, emptyLocation);
        return nextState;
    }
    return null;
}

function slideTile2(state) {
    var puzzleState = state;
    var currentLocation = puzzleState.getLocation(2);
    var emptyLocation = puzzleState.getLocation(0);
    var nextState;
    var boolean = false;
    if(currentLocation.column === emptyLocation.column && currentLocation.row + 1 === emptyLocation.row) {
        boolean = true;
    }
    else if(currentLocation.column === emptyLocation.column && currentLocation.row - 1 === emptyLocation.row) {
        boolean = true;
    }
    else if(currentLocation.row === emptyLocation.row && currentLocation.column + 1 === emptyLocation.column) {
        boolean = true;
    }
    else if(currentLocation.row === emptyLocation.row && currentLocation.column - 1 === emptyLocation.column) {
        boolean = true;
    }
    if(boolean === true) {
        nextState = puzzleState.swap(currentLocation, emptyLocation);
        return nextState;
    }
    return null;
}

function slideTile3(state) {
    var puzzleState = state;
    var currentLocation = puzzleState.getLocation(3);
    var emptyLocation = puzzleState.getLocation(0);
    var nextState;
    var boolean = false;
    if(currentLocation.column === emptyLocation.column && currentLocation.row + 1 === emptyLocation.row) {
        boolean = true;
    }
    else if(currentLocation.column === emptyLocation.column && currentLocation.row - 1 === emptyLocation.row) {
        boolean = true;
    }
    else if(currentLocation.row === emptyLocation.row && currentLocation.column + 1 === emptyLocation.column) {
        boolean = true;
    }
    else if(currentLocation.row === emptyLocation.row && currentLocation.column - 1 === emptyLocation.column) {
        boolean = true;
    }
    if(boolean === true) {
        nextState = puzzleState.swap(currentLocation, emptyLocation);
        return nextState;
    }
    return null;
}

function slideTile4(state) {
    var puzzleState = state;
    var currentLocation = puzzleState.getLocation(4);
    var emptyLocation = puzzleState.getLocation(0);
    var nextState;
    var boolean = false;
    if(currentLocation.column === emptyLocation.column && currentLocation.row + 1 === emptyLocation.row) {
        boolean = true;
    }
    else if(currentLocation.column === emptyLocation.column && currentLocation.row - 1 === emptyLocation.row) {
        boolean = true;
    }
    else if(currentLocation.row === emptyLocation.row && currentLocation.column + 1 === emptyLocation.column) {
        boolean = true;
    }
    else if(currentLocation.row === emptyLocation.row && currentLocation.column - 1 === emptyLocation.column) {
        boolean = true;
    }
    if(boolean === true) {
        nextState = puzzleState.swap(currentLocation, emptyLocation);
        return nextState;
    }
    return null;
}

function slideTile5(state) {
    var puzzleState = state;
    var currentLocation = puzzleState.getLocation(5);
    var emptyLocation = puzzleState.getLocation(0);
    var nextState;
    var boolean = false;
    if(currentLocation.column === emptyLocation.column && currentLocation.row + 1 === emptyLocation.row) {
        boolean = true;
    }
    else if(currentLocation.column === emptyLocation.column && currentLocation.row - 1 === emptyLocation.row) {
        boolean = true;
    }
    else if(currentLocation.row === emptyLocation.row && currentLocation.column + 1 === emptyLocation.column) {
        boolean = true;
    }
    else if(currentLocation.row === emptyLocation.row && currentLocation.column - 1 === emptyLocation.column) {
        boolean = true;
    }
    if(boolean === true) {
        nextState = puzzleState.swap(currentLocation, emptyLocation);
        return nextState;
    }
    return null;
}

function slideTile6(state) {
    var puzzleState = state;
    var currentLocation = puzzleState.getLocation(6);
    var emptyLocation = puzzleState.getLocation(0);
    var nextState;
    var boolean = false;
    if(currentLocation.column === emptyLocation.column && currentLocation.row + 1 === emptyLocation.row) {
        //below tile is okay
        boolean = true;
    }
    else if(currentLocation.column === emptyLocation.column && currentLocation.row - 1 === emptyLocation.row) {
        // above tile is okay
        boolean = true;
    }
    else if(currentLocation.row === emptyLocation.row && currentLocation.column + 1 === emptyLocation.column) {
        //right tile is okay
        boolean = true;
    }
    else if(currentLocation.row === emptyLocation.row && currentLocation.column - 1 === emptyLocation.column) {
        //left tile is okay
        boolean = true;
    }
    if(boolean === true) {
        nextState = puzzleState.swap(currentLocation, emptyLocation);
        return nextState;
    }
    return null;
}

function slideTile7(state) {
    var puzzleState = state;
    var currentLocation = puzzleState.getLocation(7);
    var emptyLocation = puzzleState.getLocation(0);
    var nextState;
    var boolean = false;
    if(currentLocation.column === emptyLocation.column && currentLocation.row + 1 === emptyLocation.row) {
        //below tile is okay
        boolean = true;
    }
    else if(currentLocation.column === emptyLocation.column && currentLocation.row - 1 === emptyLocation.row) {
        // above tile is okay
        boolean = true;
    }
    else if(currentLocation.row === emptyLocation.row && currentLocation.column + 1 === emptyLocation.column) {
        //right tile is okay
        boolean = true;
    }
    else if(currentLocation.row === emptyLocation.row && currentLocation.column - 1 === emptyLocation.column) {
        //left tile is okay
        boolean = true;
    }
    if(boolean === true) {
        nextState = puzzleState.swap(currentLocation, emptyLocation);
        return nextState;
    }
    return null;
}

function slideTile8(state) {
    var puzzleState = state;
    var currentLocation = puzzleState.getLocation(8);
    var emptyLocation = puzzleState.getLocation(0);
    var nextState;
    var boolean = false;
    if(currentLocation.column === emptyLocation.column && currentLocation.row + 1 === emptyLocation.row) {
        //below tile is okay
        boolean = true;
    }
    else if(currentLocation.column === emptyLocation.column && currentLocation.row - 1 === emptyLocation.row) {
        // above tile is okay
        boolean = true;
    }
    else if(currentLocation.row === emptyLocation.row && currentLocation.column + 1 === emptyLocation.column) {
        //right tile is okay
        boolean = true;
    }
    else if(currentLocation.row === emptyLocation.row && currentLocation.column - 1 === emptyLocation.column) {
        //left tile is okay
        boolean = true;
    }
    if(boolean === true) {
        nextState = puzzleState.swap(currentLocation, emptyLocation);
        return nextState;
    }
    return null;
}