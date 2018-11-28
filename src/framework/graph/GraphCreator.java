package framework.graph;

import framework.problem.Mover;
import framework.problem.Problem;
import framework.problem.State;
import java.util.List;
import java.util.Stack;

/**
 * @author Danny Boie
 */
public class GraphCreator {
    
    public Graph createGraphFor(Problem problem) {

        graph = new Graph();
        myStack = new Stack<>();
        start = new Vertex(problem.getInitialState());
        
        myStack.push(start);
       
        myMover = problem.getMover();
        moves = myMover.getMoveNames();
        
        while(!myStack.isEmpty()) {
            u = myStack.pop();
            
            for(String x: moves) {
                next = myMover.doMove(x, (State) start.getData());
                if (next != null) {
                   v = new Vertex(next);
                   if (graph.getVertices().containsKey(v)) {
                       v = graph.getVertices().get(v);

                   } else {
                       myStack.push(v);
                   }
                graph.addEdge(u, v);
                }
            }
        }
        return graph;
    }
    
    private Vertex v;
    private Vertex u;
    private State next = null;
    private Mover myMover = null;
    private List<String> moves = null;
    private Graph graph = null;
    private Stack<Vertex> myStack = null;
    private Vertex start = null;
    
}