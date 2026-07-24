package com.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class ExceptionThrowerTest {

    @Test
    void testThrowException() {

        IllegalArgumentException exception = assertThrows(
                IllegalArgumentException.class,
                () -> {
                    ExceptionThrower thrower = new ExceptionThrower();
                    thrower.throwException();
                });

        assertEquals("Invalid input", exception.getMessage());
    }
}