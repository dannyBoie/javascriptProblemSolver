package framework.ui;

import framework.problem.Mover;
import framework.problem.Problem;
import framework.problem.State;
import framework.solution.SolvingAssistant;
import java.util.List;
import javafx.geometry.Insets;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.scene.text.TextAlignment;

public class ProblemGUI extends VBox {
    
    public ProblemGUI(Problem problem, double width, double height) {
        
        
        //solver constructor
        solver = new SolvingAssistant(problem);
       
        //currentState
        currentState = new VBox();
        currentStateLabel = new Label("Current State:");
        currentState.getChildren().addAll(currentStateLabel,
                                          toState(problem.getCurrentState()));
        
        
        //finalState
        finalState = new VBox();
        finalStateLabel = new Label("Goal State:");
        finalState.getChildren().addAll(finalStateLabel,
                                        toState(problem.getFinalState()));
        
        
        //move buttons
        buttonBox = new VBox();
        problemMover = problem.getMover();
        problemMoves = problemMover.getMoveNames();
        for(String x : problemMoves) {
            Button btn = new Button(x);
            btn.setTextAlignment(TextAlignment.CENTER);
            btn.setPadding(new Insets(5,5,5,5));
            btn.setFont(Font.font("DejaVu Sans Mono", 12));
            
            btn.setOnAction(e -> buttonAction(x));
            
            buttonBox.getChildren().addAll(btn);
        }
        
        //box to house states & buttons
        stateBox = new HBox();
        stateBox.getChildren().addAll(currentState,
                                      buttonBox,
                                      finalState);

        
        //welcome message 
        welcomeLabel = new Label(problem.getName());
        
        
        //Create Introduction
        introduction = new Label(problem.getIntroduction());
        introduction.setWrapText(true);
        
        
        //add to main Vbox
        super.getChildren().addAll(welcomeLabel,
                                   introduction,
                                   stateBox);
        
                
    }
    
    // Instance fields
    private Label welcomeLabel;
    private Label introduction;
    private VBox currentState;
    private Label currentStateLabel;
    private VBox finalState;
    private Label finalStateLabel;
    private HBox stateBox;
    private Mover problemMover;
    private List<String> problemMoves;
    private VBox buttonBox;
    private SolvingAssistant solver;
    
    //helper methods
    
    //adds state to layout
    private Label toState(State state) {
        
        Label stateLabel = new Label(state.toString());
        stateLabel.setPadding(new Insets(10, 10, 10, 10));
        stateLabel.setStyle("-fx-border-color: black");
        stateLabel.setFont(Font.font("DejaVu Sans Mono", FontWeight.BOLD, 20));

        return stateLabel;
    }
    
    // creates buttons
   
    //tries the action for the button
    private void buttonAction(String name) {
        
        
        solver.tryMove(name);
        if(solver.isMoveLegal()) {
            
        } else {
            
        }
        
    }
    
}
