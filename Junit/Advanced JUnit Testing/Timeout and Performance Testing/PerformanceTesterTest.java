package com.example;

import org.junit.jupiter.api.Test;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertTimeout;

public class PerformanceTesterTest {

    @Test
    void testPerformTaskTimeout() {

        PerformanceTester tester = new PerformanceTester();

        assertTimeout(Duration.ofSeconds(3), () -> {
            tester.performTask();
        });
    }
}