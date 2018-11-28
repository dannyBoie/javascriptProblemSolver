package domains.farmer;

import framework.graph.Graph;
import framework.graph.Vertex;

public class FarmerGraph extends Graph {
    
    public FarmerGraph() {
  
        one = new Vertex(new FarmerState("West",
                                         "West",
                                         "West",
                                         "West"));
        two = new Vertex(new FarmerState("West",
                                         "East",
                                         "West",
                                         "East"));
        three = new Vertex(new FarmerState("West",
                                           "East",
                                           "West",
                                           "West"));
        four = new Vertex(new FarmerState("West",
                                           "West",
                                           "East",
                                           "West"));
        five = new Vertex(new FarmerState("West",
                                           "West",
                                           "West",
                                           "East"));
        six = new Vertex(new FarmerState("East",
                                           "East",
                                           "East",
                                           "East"));
        seven = new Vertex(new FarmerState("East",
                                           "West",
                                           "East",
                                           "West"));
        eight = new Vertex(new FarmerState("East",
                                           "West",
                                           "East",
                                           "East"));
        nine = new Vertex(new FarmerState("East",
                                           "East",
                                           "West",
                                           "East"));
        ten = new Vertex(new FarmerState("East",
                                           "East",
                                           "East",
                                           "West"));
        addEdge(one,seven);
        addEdge(seven,one);
        addEdge(seven,four);
        addEdge(four,seven);
        addEdge(four,ten);
        addEdge(ten,four);
        addEdge(four,eight);
        addEdge(eight,four);
        addEdge(ten,three);
        addEdge(three,ten);
        addEdge(eight,five);
        addEdge(five,eight);
        addEdge(three,nine);
        addEdge(nine,three);
        addEdge(five,nine);
        addEdge(nine,five);
        addEdge(nine,two);
        addEdge(two,nine);
        addEdge(two,six);
        addEdge(six,two);

    }
    
    public Vertex getStart() {
        return one;
    }
    
    public Vertex getEnd() {
        return six;
    }
    
    Vertex one, two, three, four, five, six, seven, eight, nine, ten;
}