
public class FinancialForecasting {

    // Recursive Method
    public static double futureValue(double amount,
                                     double rate,
                                     int years) {

        if (years == 0)
            return amount;

        return futureValue(amount * (1 + rate / 100),
                           rate,
                           years - 1);

    }

    public static void main(String[] args) {

        double result = futureValue(10000, 10, 3);

        System.out.printf("Future Value : Rs.%.2f", result);

    }

}