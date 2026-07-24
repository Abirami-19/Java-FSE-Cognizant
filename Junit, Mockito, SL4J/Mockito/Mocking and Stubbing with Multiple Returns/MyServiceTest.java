package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testMultipleReturns() {

        // Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Stub method with multiple return values
        when(mockApi.getData())
                .thenReturn("First Call")
                .thenReturn("Second Call")
                .thenReturn("Third Call");

        // Inject mock into service
        MyService service = new MyService(mockApi);

        // Call method multiple times
        assertEquals("First Call", service.fetchData());
        assertEquals("Second Call", service.fetchData());
        assertEquals("Third Call", service.fetchData());
    }
}