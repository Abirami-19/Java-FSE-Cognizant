
class Employee {

    int employeeId;
    String name;
    String position;
    double salary;

    public Employee(int employeeId, String name,
                    String position, double salary) {

        this.employeeId = employeeId;
        this.name = name;
        this.position = position;
        this.salary = salary;

    }

    public void display() {

        System.out.println(
                employeeId + "  " +
                name + "  " +
                position + "  Rs." +
                salary);

    }

}

public class EmployeeManagementSystem {

    static Employee[] employees = new Employee[10];
    static int count = 0;

    // Add Employee
    public static void addEmployee(Employee employee) {

        if (count < employees.length) {

            employees[count++] = employee;

            System.out.println("Employee Added Successfully.");

        } else {

            System.out.println("Employee List is Full.");

        }

    }

    // Search Employee
    public static void searchEmployee(int id) {

        for (int i = 0; i < count; i++) {

            if (employees[i].employeeId == id) {

                System.out.println("\nEmployee Found");
                employees[i].display();
                return;

            }

        }

        System.out.println("Employee Not Found.");

    }

    // Traverse Employees
    public static void displayEmployees() {

        System.out.println("\nEmployee Records");

        for (int i = 0; i < count; i++) {

            employees[i].display();

        }

    }

    // Delete Employee
    public static void deleteEmployee(int id) {

        for (int i = 0; i < count; i++) {

            if (employees[i].employeeId == id) {

                for (int j = i; j < count - 1; j++) {

                    employees[j] = employees[j + 1];

                }

                employees[count - 1] = null;
                count--;

                System.out.println("Employee Deleted Successfully.");
                return;

            }

        }

        System.out.println("Employee Not Found.");

    }

    public static void main(String[] args) {

        addEmployee(new Employee(
                101,
                "John",
                "Manager",
                60000));

        addEmployee(new Employee(
                102,
                "Alice",
                "Developer",
                50000));

        addEmployee(new Employee(
                103,
                "David",
                "Tester",
                45000));

        searchEmployee(102);

        deleteEmployee(103);

        displayEmployees();

    }

}