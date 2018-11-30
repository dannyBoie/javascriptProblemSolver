function PuzzleProblem() {
  this.name = "8-Puzzle Problem";
  this.introduction =  "You are given a board in which numbered tiles can slide around." +
            "There is one blank space that holds no tile." +
            "A legal move consists of sliding a tile into the blank space if the tile is adjacent to it." +
            "The goal is to move tiles around until the board looks like the final state below.\n" +
                "+---+---+---+\n" +
                "| 1 | 2 | 3 |\n" +
                "+---+---+---+\n" +
                "| 8 |   | 4 |\n" +
                "+---+---+---+\n" +
                "| 7 | 6 | 5 |\n" +
                "+---+---+---+";
        
   this.initialState = new PuzzleState([[2,8,3],[1,6,4],[7,0,5]]);
   this.currentState = this.initialState;
   this.finalState = new PuzzleState([[1,2,3],[8,0,4],[7,6,5]]);
   this.moveNames = [SLIDE_1, SLIDE_2, SLIDE_3, SLIDE_4, SLIDE_5, SLIDE_6, SLIDE_7, SLIDE_8];
   this.mover = new PuzzleMover();

    this.success = function () {
	return this.currentState.equals(this.finalState);
    };
}
