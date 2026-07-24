package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class EvenCheckerTest {

    EvenChecker checker = new EvenChecker();

    @Test
    void testEven() {
        assertTrue(checker.isEven(10));
    }
}