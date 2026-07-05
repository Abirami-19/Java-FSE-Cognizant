/*
============================================================
Exercise 1 : Singleton Pattern
============================================================

Objective:
To implement the Singleton Design Pattern by ensuring
that only one instance of the Logger class exists
throughout the application.
*/

class Logger {

    // Static object to store the single instance
    private static Logger instance;

    // Private constructor prevents object creation from outside
    private Logger() {
        System.out.println("Logger instance created.");
    }

    // Method to return the single instance
    public static Logger getInstance() {

        if (instance == null) {
            instance = new Logger();
        }

        return instance;
    }

    // Method for logging messages
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}

public class SingletonPatternExample {

    public static void main(String[] args) {

        // Get Logger instance
        Logger logger1 = Logger.getInstance();

        logger1.log("Application started.");

        // Get Logger instance again
        Logger logger2 = Logger.getInstance();

        logger2.log("User logged in.");

        // Verify that both references point to the same object
        if (logger1 == logger2) {

            System.out.println("Only one Logger instance exists.");

        } else {

            System.out.println("Multiple Logger instances created.");

        }

    }

}