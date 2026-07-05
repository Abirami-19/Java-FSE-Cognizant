/*
============================================================
Exercise 5 : Task Management System
============================================================

Objective:
To implement a Singly Linked List for
managing tasks.
*/

class Task {

    int taskId;
    String taskName;
    String status;

    Task next;

    public Task(int taskId,
                String taskName,
                String status) {

        this.taskId = taskId;
        this.taskName = taskName;
        this.status = status;
        this.next = null;

    }

}

public class TaskManagementSystem {

    static Task head = null;

    // Add Task
    public static void addTask(int id,
                               String name,
                               String status) {

        Task newTask = new Task(id, name, status);

        if (head == null) {

            head = newTask;

        } else {

            Task temp = head;

            while (temp.next != null) {

                temp = temp.next;

            }

            temp.next = newTask;

        }

        System.out.println("Task Added Successfully.");

    }

    // Search Task
    public static void searchTask(int id) {

        Task temp = head;

        while (temp != null) {

            if (temp.taskId == id) {

                System.out.println("\nTask Found");
                System.out.println(
                        temp.taskId + "  " +
                        temp.taskName + "  " +
                        temp.status);

                return;

            }

            temp = temp.next;

        }

        System.out.println("Task Not Found.");

    }

    // Display Tasks
    public static void displayTasks() {

        System.out.println("\nTask List");

        Task temp = head;

        while (temp != null) {

            System.out.println(
                    temp.taskId + "  " +
                    temp.taskName + "  " +
                    temp.status);

            temp = temp.next;

        }

    }

    // Delete Task
    public static void deleteTask(int id) {

        if (head == null) {

            return;

        }

        if (head.taskId == id) {

            head = head.next;

            System.out.println("Task Deleted Successfully.");

            return;

        }

        Task temp = head;

        while (temp.next != null &&
               temp.next.taskId != id) {

            temp = temp.next;

        }

        if (temp.next != null) {

            temp.next = temp.next.next;

            System.out.println("Task Deleted Successfully.");

        }

        else {

            System.out.println("Task Not Found.");

        }

    }

    public static void main(String[] args) {

        addTask(101,
                "Design Database",
                "Pending");

        addTask(102,
                "Develop Module",
                "In Progress");

        addTask(103,
                "Testing",
                "Pending");

        searchTask(102);

        deleteTask(103);

        displayTasks();

    }

}