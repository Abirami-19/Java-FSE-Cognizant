/*
============================================================
Exercise 11 : Dependency Injection
============================================================

Objective:
To implement Dependency Injection using
Constructor Injection for a Customer
Management Application.
*/

// ============================================================
// Repository Interface
// ============================================================

interface CustomerRepository {

    String findCustomerById(int customerId);

}


// ============================================================
// Repository Implementation
// ============================================================

class CustomerRepositoryImpl implements CustomerRepository {

    @Override
    public String findCustomerById(int customerId) {

        if (customerId == 101) {

            return "John Doe";

        } else if (customerId == 102) {

            return "Jane Smith";

        } else {

            return "Customer Not Found";

        }

    }

}


// ============================================================
// Service Class
// ============================================================

class CustomerService {

    private CustomerRepository repository;

    // Constructor Injection
    public CustomerService(CustomerRepository repository) {

        this.repository = repository;

    }

    public void displayCustomer(int customerId) {

        String customerName =
                repository.findCustomerById(customerId);

        System.out.println("Customer ID   : " + customerId);
        System.out.println("Customer Name : " + customerName);

    }

}


// ============================================================
// Main Class
// ============================================================

public class DependencyInjectionExample {

    public static void main(String[] args) {

        // Inject Repository into Service
        CustomerRepository repository =
                new CustomerRepositoryImpl();

        CustomerService service =
                new CustomerService(repository);

        // Display Customer Details
        service.displayCustomer(101);

    }

}