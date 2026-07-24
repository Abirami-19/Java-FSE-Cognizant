package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class ServiceTest {

    @Test
    public void testServiceWithMockRepository() {

        // Create Mock Repository
        Repository mockRepository = mock(Repository.class);

        // Stub the method
        when(mockRepository.getData()).thenReturn("Mock Data");

        // Inject mock into Service
        Service service = new Service(mockRepository);

        // Call service method
        String result = service.processData();

        // Verify result
        assertEquals("Processed Mock Data", result);

        // Verify interaction
        verify(mockRepository).getData();
    }
}