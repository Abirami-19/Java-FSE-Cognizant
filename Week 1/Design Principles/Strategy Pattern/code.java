/*
============================================================
Exercise 8 : Strategy Pattern
============================================================

Objective:
To implement the Strategy Design Pattern for selecting
different payment methods at runtime.
*/

// ============================================================
// Strategy Interface
// ============================================================

interface PaymentStrategy {

    void pay(double amount);

}


// ============================================================
// Concrete Strategy Classes
// ============================================================

class CreditCardPayment implements PaymentStrategy {

    @Override
    public void pay(double amount) {

        System.out.println("Payment of Rs." + amount +
                " made using Credit Card.");

    }

}

class PayPalPayment implements PaymentStrategy {

    @Override
    public void pay(double amount) {

        System.out.println("Payment of Rs." + amount +
                " made using PayPal.");

    }

}


// ============================================================
// Context Class
// ============================================================

class PaymentContext {

    private PaymentStrategy paymentStrategy;

    public void setPaymentStrategy(PaymentStrategy paymentStrategy) {

        this.paymentStrategy = paymentStrategy;

    }

    public void makePayment(double amount) {

        if (paymentStrategy != null) {

            paymentStrategy.pay(amount);

        } else {

            System.out.println("Please select a payment method.");

        }

    }

}


// ============================================================
// Main Class
// ============================================================

public class StrategyPatternExample {

    public static void main(String[] args) {

        PaymentContext payment = new PaymentContext();

        // Credit Card Payment
        payment.setPaymentStrategy(new CreditCardPayment());
        payment.makePayment(2500);

        // PayPal Payment
        payment.setPaymentStrategy(new PayPalPayment());
        payment.makePayment(4500);

    }

}