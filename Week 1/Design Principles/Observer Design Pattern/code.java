/*
============================================================
Exercise 7 : Observer Pattern
============================================================

Objective:
To implement the Observer Design Pattern for notifying
multiple clients whenever the stock price changes.
*/

import java.util.ArrayList;
import java.util.List;

// ============================================================
// Observer Interface
// ============================================================

interface Observer {

    void update(String stockName, double price);

}


// ============================================================
// Subject Interface
// ============================================================

interface Stock {

    void registerObserver(Observer observer);

    void deregisterObserver(Observer observer);

    void notifyObservers();

}


// ============================================================
// Concrete Subject
// ============================================================

class StockMarket implements Stock {

    private List<Observer> observers = new ArrayList<>();

    private String stockName;
    private double stockPrice;

    public void setStockPrice(String stockName, double stockPrice) {

        this.stockName = stockName;
        this.stockPrice = stockPrice;

        notifyObservers();

    }

    @Override
    public void registerObserver(Observer observer) {

        observers.add(observer);

    }

    @Override
    public void deregisterObserver(Observer observer) {

        observers.remove(observer);

    }

    @Override
    public void notifyObservers() {

        for (Observer observer : observers) {

            observer.update(stockName, stockPrice);

        }

    }

}


// ============================================================
// Concrete Observers
// ============================================================

class MobileApp implements Observer {

    @Override
    public void update(String stockName, double price) {

        System.out.println(
                "Mobile App : " +
                stockName +
                " price updated to Rs." +
                price);

    }

}

class WebApp implements Observer {

    @Override
    public void update(String stockName, double price) {

        System.out.println(
                "Web App : " +
                stockName +
                " price updated to Rs." +
                price);

    }

}


// ============================================================
// Main Class
// ============================================================

public class ObserverPatternExample {

    public static void main(String[] args) {

        StockMarket stockMarket = new StockMarket();

        Observer mobileApp = new MobileApp();
        Observer webApp = new WebApp();

        stockMarket.registerObserver(mobileApp);
        stockMarket.registerObserver(webApp);

        System.out.println("Stock Price Updated");

        stockMarket.setStockPrice("TCS", 3850.50);

    }

}