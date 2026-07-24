package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class MultiReturnServiceTest {

    @Test
    public void testServiceWithMultipleReturnValues() {

        // Create Mock Repository
        Repository mockRepository = mock(Repository.class);

        // Stub method with multiple return values
        when(mockRepository.getData())
                .thenReturn("First Mock Data")
                .thenReturn("Second Mock Data");

        // Create Service
        Service service = new Service(mockRepository);

        // Call service twice
        String firstResult = service.processData();
        String secondResult = service.processData();

        // Verify results
        assertEquals("Processed First Mock Data", firstResult);
        assertEquals("Processed Second Mock Data", secondResult);

        // Verify method called twice
        verify(mockRepository, times(2)).getData();
    }
}