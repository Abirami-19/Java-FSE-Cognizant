/*
============================================================
Exercise 6 : Proxy Pattern
============================================================

Objective:
To implement the Proxy Design Pattern for loading
images using lazy initialization and caching.
*/

// ============================================================
// Subject Interface
// ============================================================

interface Image {

    void display();

}


// ============================================================
// Real Subject
// ============================================================

class RealImage implements Image {

    private String fileName;

    public RealImage(String fileName) {

        this.fileName = fileName;
        loadFromServer();

    }

    private void loadFromServer() {

        System.out.println("Loading " + fileName +
                           " from remote server...");

    }

    @Override
    public void display() {

        System.out.println("Displaying " + fileName);

    }

}


// ============================================================
// Proxy Class
// ============================================================

class ProxyImage implements Image {

    private String fileName;
    private RealImage realImage;

    public ProxyImage(String fileName) {

        this.fileName = fileName;

    }

    @Override
    public void display() {

        if (realImage == null) {

            realImage = new RealImage(fileName);

        }

        realImage.display();

    }

}


// ============================================================
// Main Class
// ============================================================

public class ProxyPatternExample {

    public static void main(String[] args) {

        Image image = new ProxyImage("CollegeLogo.png");

        System.out.println("First Display");

        image.display();

        System.out.println();

        System.out.println("Second Display");

        image.display();

    }

}