//var tiles = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    
function PuzzleState(tiles) {
    this.tiles = tiles;
    
   
    this.getTiles = function() {
        return this.tiles;
    };
  
    this.swap = function(currentLocation, emptyLocation) {
        var copy = this.tiles.slice();
        copy[0] = this.tiles[0].slice();
        copy[1] = this.tiles[1].slice();
        copy[2] = this.tiles[2].slice();
        
        var tileNumber = copy[currentLocation.row][currentLocation.column]; 
        var emptyNumber = copy[emptyLocation.row][emptyLocation.column];
        copy[currentLocation.row][currentLocation.column] = emptyNumber;
        copy[emptyLocation.row][emptyLocation.column] = tileNumber;
        var puzzleState = new PuzzleState(copy); 
        
        return puzzleState;
    };
    
   
    function Location(row, column) {
        var rows = row;
        var columns = column;
            
   
    this.Location = function(rows, columns) {
        this.rows = rows;
        this.columns = columns;
    };
    
   
    this.equals = function(other) {      // returns true if other state
        if (other === null) return false;
        if (other.typeof !== this.typeof) return false;
        return this.row === other.row && this.column === other.column;
    };
};


    this.getLocation = function(tileNumber) {
        for (var r = 0; r < 3; r++) {
            for (var c = 0; c < 3; c++) {
                if (tiles[r][c] === tileNumber) { //when tile is found
                    return {row: r, column: c};
                }
            }
        }
    };
    

    this.toString = function () {
        var line = "\n+---+---+---+";
        var row1 = "\n|  " +this.tiles[0][0] + "  |  " + this.tiles[0][1] + "  |  " + this.tiles[0][2] + " |";
        var row2 = "\n|  " + this.tiles[1][0] + "  |  " + this.tiles[1][1] + "  |  " + this.tiles[1][2] + " |";
        var row3 = "\n|  " + this.tiles[2][0] + "  |  " + this.tiles[2][1] + "  |  " + this.tiles[2][2] + " |";
        var matrix = line.substr(1) + row1 + line + row2 + line + row3 + line;
       
        return matrix;
    };
    
  
    function countProps(obj) {
    var count = 0;
    for (k in obj) {
        if (obj.hasOwnProperty(k)) {
            count++;
        }
    }
    return count;
};
    
   
    function objectEquals(v1, v2) {

    if (typeof(v1) !== typeof(v2)) {
        return false;
    }

    if (typeof(v1) === "function") {
        return v1.toString() === v2.toString();
    }

    if (v1 instanceof Object && v2 instanceof Object) {
        if (countProps(v1) !== countProps(v2)) {
            return false;
        }
        var r = true;
        for (k in v1) {
            r = objectEquals(v1[k], v2[k]);
            if (!r) {
                return false;
            }
        }
        return true;
    } else {
        return v1 === v2;
    }
};
    
  
    this.equals = function(other) {
        if(other === null) return false;
        if(other.typeof !== PuzzleState.typeof) return false;
        if(this === other) return true;
        return objectEquals(this.tiles, other.tiles);
    };
    
    }