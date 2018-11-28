
package domains.arithmetic;

import framework.problem.State;
import java.util.stream.Stream;


public class ArithmeticState implements State {

    private final int contents;
    private final String foos = "The value is: ";
    
        public ArithmeticState(int contents) {
            this.contents = contents;
        }
        
        
        public int getContents()
        {
            return contents;
        }
        
        
        @Override
        public boolean equals(Object other) {
            ArithmeticState otherA = (ArithmeticState) other;
            return this.contents==otherA.contents;
        }
        
        @Override
        public String toString() {
            String str = foos + contents;
            return str;
        }
        
        
}
