
import java.util.Arrays;
import java.util.Comparator;

class Book {

    int bookId;
    String title;
    String author;

    public Book(int bookId,
                String title,
                String author) {

        this.bookId = bookId;
        this.title = title;
        this.author = author;

    }

    public void display() {

        System.out.println(
                bookId + "  " +
                title + "  " +
                author);

    }

}

public class LibraryManagementSystem {

    // Linear Search
    public static void linearSearch(Book[] books,
                                    String title) {

        for (Book book : books) {

            if (book.title.equalsIgnoreCase(title)) {

                System.out.println("Book Found Using Linear Search");
                book.display();
                return;

            }

        }

        System.out.println("Book Not Found.");

    }

    // Binary Search
    public static void binarySearch(Book[] books,
                                    String title) {

        int low = 0;
        int high = books.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int result =
                    books[mid].title.compareToIgnoreCase(title);

            if (result == 0) {

                System.out.println("\nBook Found Using Binary Search");
                books[mid].display();
                return;

            }

            else if (result < 0) {

                low = mid + 1;

            }

            else {

                high = mid - 1;

            }

        }

        System.out.println("Book Not Found.");

    }

    public static void main(String[] args) {

        Book[] books = {

                new Book(101,
                        "Java Programming",
                        "James Gosling"),

                new Book(102,
                        "Data Structures",
                        "Mark Allen"),

                new Book(103,
                        "Operating Systems",
                        "Silberschatz"),

                new Book(104,
                        "Computer Networks",
                        "Andrew Tanenbaum")

        };

        // Linear Search
        linearSearch(books,"Operating Systems");

        // Sort for Binary Search
        Arrays.sort(books,
                Comparator.comparing(book -> book.title));

        // Binary Search
        binarySearch(books,"Operating Systems");

    }

}