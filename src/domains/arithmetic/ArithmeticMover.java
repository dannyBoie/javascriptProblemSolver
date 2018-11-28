
package domains.arithmetic;

import framework.problem.Mover;
import framework.problem.State;


public class ArithmeticMover extends Mover{
    
        public static final String ADD = "Add 3";
        public static final String SUB = "Subtract 5";
        public static final String DIV = "Divide by 2";
        public static final String MULT = "Multiply by 2";
        
        public ArithmeticMover() {
            super.addMove(ADD, s -> tryAdd(s));
            super.addMove(SUB, s -> trySub(s));
            super.addMove(DIV, s -> tryDiv(s));
            super.addMove(MULT, s -> tryMult(s));          
        }
  
        
        private State tryAdd(State state) {
            return new ArithmeticState(((ArithmeticState)state).getContents() + 3);
        }

        private State trySub(State state) {
            return new ArithmeticState(((ArithmeticState)state).getContents() -5);
        }

        private State tryDiv(State state) {
            return new ArithmeticState(((ArithmeticState)state).getContents() /2);
        }

        private State tryMult(State state) {
            return new ArithmeticState(((ArithmeticState)state).getContents() *2);
        }

        private State illegalMove(State state) {
            return new ArithmeticState(((ArithmeticState)state).getContents());
        }
    }