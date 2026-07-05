/*
============================================================
Exercise 2 : E-commerce Platform Search Function
============================================================

Objective:
To implement Linear Search and Binary Search
for searching products in an E-commerce platform.
*/

import java.util.Arrays;
import java.util.Comparator;

class Product {

    int productId;
    String productName;
    String category;

    public Product(int productId, String productName,
                   String category) {

        this.productId = productId;
        this.productName = productName;
        this.category = category;

    }

}

public class EcommerceSearchSystem {

    // Linear Search
    public static void linearSearch(Product[] products,
                                    String name) {

        for (Product product : products) {

            if (product.productName.equalsIgnoreCase(name)) {

                System.out.println("Product Found Using Linear Search");
                System.out.println("ID : " + product.productId);
                System.out.println("Name : " + product.productName);
                System.out.println("Category : " + product.category);
                return;

            }

        }

        System.out.println("Product Not Found.");

    }

    // Binary Search
    public static void binarySearch(Product[] products,
                                    String name) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int result = products[mid].productName
                    .compareToIgnoreCase(name);

            if (result == 0) {

                System.out.println("\nProduct Found Using Binary Search");
                System.out.println("ID : " + products[mid].productId);
                System.out.println("Name : " + products[mid].productName);
                System.out.println("Category : " + products[mid].category);
                return;

            }

            else if (result < 0) {

                low = mid + 1;

            }

            else {

                high = mid - 1;

            }

        }

        System.out.println("Product Not Found.");

    }

    public static void main(String[] args) {

        Product[] products = {

                new Product(101,"Laptop","Electronics"),
                new Product(102,"Keyboard","Electronics"),
                new Product(103,"Mouse","Accessories"),
                new Product(104,"Phone","Electronics"),
                new Product(105,"Speaker","Audio")

        };

        // Linear Search
        linearSearch(products,"Phone");

        // Sort array for Binary Search
        Arrays.sort(products,
                Comparator.comparing(p -> p.productName));

        // Binary Search
        binarySearch(products,"Phone");

    }

}