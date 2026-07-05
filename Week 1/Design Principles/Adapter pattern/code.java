/*
============================================================
Exercise 4 : Adapter Pattern
============================================================

Objective:
To implement the Adapter Design Pattern for integrating
different payment gateways using a common interface.
*/

// ============================================================
// Target Interface
// ============================================================

interface PaymentProcessor {

    void processPayment(double amount);

}


// ============================================================
// Adaptee Classes
// ============================================================

class PayPalGateway {

    public void makePayment(double amount) {

        System.out.println("Payment of Rs." + amount +
                           " processed using PayPal.");

    }

}

class StripeGateway {

    public void pay(double amount) {

        System.out.println("Payment of Rs." + amount +
                           " processed using Stripe.");

    }

}


// ============================================================
// Adapter Classes
// ============================================================

class PayPalAdapter implements PaymentProcessor {

    private PayPalGateway paypal;

    public PayPalAdapter() {

        paypal = new PayPalGateway();

    }

    @Override
    public void processPayment(double amount) {

        paypal.makePayment(amount);

    }

}

class StripeAdapter implements PaymentProcessor {

    private StripeGateway stripe;

    public StripeAdapter() {

        stripe = new StripeGateway();

    }

    @Override
    public void processPayment(double amount) {

        stripe.pay(amount);

    }

}


// ============================================================
// Main Class
// ============================================================

public class AdapterPatternExample {

    public static void main(String[] args) {

        PaymentProcessor payment;

        payment = new PayPalAdapter();
        payment.processPayment(2500);

        payment = new StripeAdapter();
        payment.processPayment(5000);

    }

}