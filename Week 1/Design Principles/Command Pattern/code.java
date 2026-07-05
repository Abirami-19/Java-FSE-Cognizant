/*
============================================================
Exercise 9 : Command Pattern
============================================================

Objective:
To implement the Command Design Pattern for controlling
home automation devices using commands.
*/

// ============================================================
// Command Interface
// ============================================================

interface Command {

    void execute();

}


// ============================================================
// Receiver Class
// ============================================================

class Light {

    public void turnOn() {

        System.out.println("Light is ON.");

    }

    public void turnOff() {

        System.out.println("Light is OFF.");

    }

}


// ============================================================
// Concrete Command Classes
// ============================================================

class LightOnCommand implements Command {

    private Light light;

    public LightOnCommand(Light light) {

        this.light = light;

    }

    @Override
    public void execute() {

        light.turnOn();

    }

}

class LightOffCommand implements Command {

    private Light light;

    public LightOffCommand(Light light) {

        this.light = light;

    }

    @Override
    public void execute() {

        light.turnOff();

    }

}


// ============================================================
// Invoker Class
// ============================================================

class RemoteControl {

    private Command command;

    public void setCommand(Command command) {

        this.command = command;

    }

    public void pressButton() {

        command.execute();

    }

}


// ============================================================
// Main Class
// ============================================================

public class CommandPatternExample {

    public static void main(String[] args) {

        Light light = new Light();

        Command lightOn = new LightOnCommand(light);
        Command lightOff = new LightOffCommand(light);

        RemoteControl remote = new RemoteControl();

        System.out.println("Pressing ON Button");
        remote.setCommand(lightOn);
        remote.pressButton();

        System.out.println();

        System.out.println("Pressing OFF Button");
        remote.setCommand(lightOff);
        remote.pressButton();

    }

}