function PuzzleState(tiles) {
    var tiles;
    this.tiles = tiles;

}

 //helper functions here
@Override
function equals (otherState) {
    var returnBool = true;
    if(r=0; r<3; r++) {
        if(c=0; c<3; c++) {
            if((this.tiles[r][r]) !== (otherState.tiles[r][c])) {
                return false;
            }
        }
    }
    return returnBool;
};


