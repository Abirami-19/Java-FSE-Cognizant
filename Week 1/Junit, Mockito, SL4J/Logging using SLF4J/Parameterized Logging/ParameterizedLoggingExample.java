package com.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLoggingExample {

    // Create Logger object
    private static final Logger logger =
            LoggerFactory.getLogger(ParameterizedLoggingExample.class);

    public static void main(String[] args) {

        String userName = "Presley";
        int age = 21;
        double salary = 45000.75;

        // Parameterized Logging
        logger.info("User Name: {}", userName);

        logger.info("User {} is {} years old.", userName, age);

        logger.info("User {} earns a salary of {}.", userName, salary);

        logger.warn("Low disk space: {}% remaining.", 15);

        logger.error("Failed to connect to server: {}", "localhost:8080");
    }
}