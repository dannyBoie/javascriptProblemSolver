package domains.puzzle;

import framework.ui.ProblemGUI;
import javafx.application.Application;
import static javafx.application.Application.launch;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class PuzzleGUI extends Application {

    @Override
    public void start(Stage primaryStage) {
        Scene scene = new Scene(new ProblemGUI(new PuzzleProblem(), 600, 750));
	primaryStage.setTitle("Testing Puzzle GUI");
	primaryStage.setScene(scene);
	primaryStage.show();
    }

    public static void main(String[] args) {
	launch(args);
    }
}