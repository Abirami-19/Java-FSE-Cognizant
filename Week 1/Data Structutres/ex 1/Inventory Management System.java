

import java.util.HashMap;

class Product {

    int productId;
    String productName;
    int quantity;
    double price;

    public Product(int productId, String productName,
                   int quantity, double price) {

        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;

    }

    public void display() {

        System.out.println(
                productId + "  " +
                productName + "  " +
                quantity + "  Rs." +
                price);

    }

}

public class InventoryManagementSystem {

    static HashMap<Integer, Product> inventory =
            new HashMap<>();

    // Add Product
    public static void addProduct(Product product) {

        inventory.put(product.productId, product);

        System.out.println("Product Added Successfully.");

    }

    // Update Product Quantity
    public static void updateProduct(int id, int quantity) {

        Product product = inventory.get(id);

        if (product != null) {

            product.quantity = quantity;

            System.out.println("Product Updated Successfully.");

        } else {

            System.out.println("Product Not Found.");

        }

    }

    // Delete Product
    public static void deleteProduct(int id) {

        if (inventory.remove(id) != null) {

            System.out.println("Product Deleted Successfully.");

        } else {

            System.out.println("Product Not Found.");

        }

    }

    // Display Inventory
    public static void displayInventory() {

        System.out.println("\nInventory");

        for (Product product : inventory.values()) {

            product.display();

        }

    }

    public static void main(String[] args) {

        addProduct(new Product(101,
                "Laptop",
                10,
                65000));

        addProduct(new Product(102,
                "Mouse",
                50,
                500));

        updateProduct(101,15);

        deleteProduct(102);

        displayInventory();

    }

}