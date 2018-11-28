package framework.ui;

import domains.arithmetic.ArithmeticProblem;
import javafx.scene.Scene;
import javafx.scene.control.Tab;
import javafx.scene.control.TabPane;
import javafx.stage.Stage;

import domains.dummy.DummyProblem;
import domains.farmer.FarmerProblem;
import domains.puzzle.PuzzleProblem;
import framework.problem.Problem;
import javafx.application.Application;
import javafx.scene.Node;

public class ProblemApplication extends Application {
    
    @Override
    public void start(Stage primaryStage) {
        
        addProblem(new DummyProblem(), new ProblemGUI(new DummyProblem(),600,750));
        addProblem(new ArithmeticProblem(), new ProblemGUI(new ArithmeticProblem(),600,750));
        addProblem(new FarmerProblem(), new ProblemGUI(new FarmerProblem(),600,750));
        addProblem(new PuzzleProblem(), new ProblemGUI(new PuzzleProblem(),600,750));
 
        
        Scene scene = new Scene(tabPane);
        primaryStage.setTitle("Problem Solver");
        primaryStage.setScene(scene);
        primaryStage.show();
    }
    
    private void addProblem(final Problem problem, ProblemGUI gui){
        Tab tab = new Tab();
        tab.setText(problem.getName());
        tab.setContent((Node)gui);
        tabPane.getTabs().add(tab);
    }
    
    TabPane tabPane = new TabPane();
     

    public static void main(String[] args) {
        launch(args);
    }    
}
