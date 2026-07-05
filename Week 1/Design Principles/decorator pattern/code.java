/*
============================================================
Exercise 5 : Decorator Pattern
============================================================

Objective:
To implement the Decorator Design Pattern
for sending notifications through multiple channels.
*/

// ============================================================
// Component Interface
// ============================================================

interface Notifier {

    void send(String message);

}


// ============================================================
// Concrete Component
// ============================================================

class EmailNotifier implements Notifier {

    @Override
    public void send(String message) {

        System.out.println("Email Notification: " + message);

    }

}


// ============================================================
// Abstract Decorator
// ============================================================

abstract class NotifierDecorator implements Notifier {

    protected Notifier notifier;

    public NotifierDecorator(Notifier notifier) {

        this.notifier = notifier;

    }

}


// ============================================================
// Concrete Decorators
// ============================================================

class SMSNotifierDecorator extends NotifierDecorator {

    public SMSNotifierDecorator(Notifier notifier) {

        super(notifier);

    }

    @Override
    public void send(String message) {

        notifier.send(message);
        System.out.println("SMS Notification: " + message);

    }

}

class SlackNotifierDecorator extends NotifierDecorator {

    public SlackNotifierDecorator(Notifier notifier) {

        super(notifier);

    }

    @Override
    public void send(String message) {

        notifier.send(message);
        System.out.println("Slack Notification: " + message);

    }

}


// ============================================================
// Main Class
// ============================================================

public class DecoratorPatternExample {

    public static void main(String[] args) {

        // Email Notification
        Notifier notifier = new EmailNotifier();

        System.out.println("Sending Email Notification");
        notifier.send("Meeting at 10 AM");

        System.out.println();

        // Email + SMS Notification
        notifier = new SMSNotifierDecorator(new EmailNotifier());

        System.out.println("Sending Email and SMS Notification");
        notifier.send("Project Deadline Tomorrow");

        System.out.println();

        // Email + SMS + Slack Notification
        notifier = new SlackNotifierDecorator(
                        new SMSNotifierDecorator(
                            new EmailNotifier()));

        System.out.println("Sending Email, SMS and Slack Notification");
        notifier.send("Server Maintenance Tonight");

    }

}