/*
============================================================
Exercise 3 : Builder Pattern
============================================================

Objective:
To implement the Builder Design Pattern for creating
different configurations of a Computer object.
*/

// ============================================================
// Product Class
// ============================================================

class Computer {

    // Attributes
    private String cpu;
    private String ram;
    private String storage;
    private String graphicsCard;

    // Private Constructor
    private Computer(Builder builder) {

        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.storage = builder.storage;
        this.graphicsCard = builder.graphicsCard;

    }

    // Display Computer Configuration
    public void displayConfiguration() {

        System.out.println("Computer Configuration");
        System.out.println("----------------------");
        System.out.println("CPU            : " + cpu);
        System.out.println("RAM            : " + ram);
        System.out.println("Storage        : " + storage);
        System.out.println("Graphics Card  : " + graphicsCard);

    }

    // ========================================================
    // Static Nested Builder Class
    // ========================================================

    static class Builder {

        private String cpu;
        private String ram;
        private String storage;
        private String graphicsCard;

        public Builder setCPU(String cpu) {

            this.cpu = cpu;
            return this;

        }

        public Builder setRAM(String ram) {

            this.ram = ram;
            return this;

        }

        public Builder setStorage(String storage) {

            this.storage = storage;
            return this;

        }

        public Builder setGraphicsCard(String graphicsCard) {

            this.graphicsCard = graphicsCard;
            return this;

        }

        public Computer build() {

            return new Computer(this);

        }

    }

}


// ============================================================
// Main Class
// ============================================================

public class BuilderPatternExample {

    public static void main(String[] args) {

        // Gaming Computer

        Computer gamingComputer = new Computer.Builder()
                .setCPU("Intel Core i9")
                .setRAM("32 GB")
                .setStorage("1 TB SSD")
                .setGraphicsCard("NVIDIA RTX 4070")
                .build();

        gamingComputer.displayConfiguration();

        System.out.println();

        // Office Computer

        Computer officeComputer = new Computer.Builder()
                .setCPU("Intel Core i5")
                .setRAM("16 GB")
                .setStorage("512 GB SSD")
                .setGraphicsCard("Integrated Graphics")
                .build();

        officeComputer.displayConfiguration();

    }

}