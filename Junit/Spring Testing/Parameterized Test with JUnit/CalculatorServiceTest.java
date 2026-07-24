package com.example.service;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorServiceTest {

    private final CalculatorService calculatorService = new CalculatorService();

    @ParameterizedTest
    @CsvSource({
            "2, 3, 5",
            "10, 20, 30",
            "5, 5, 10",
            "-2, 3, 1",
            "0, 0, 0"
    })
    void testAdd(int a, int b, int expected) {

        assertEquals(expected, calculatorService.add(a, b));

    }

}