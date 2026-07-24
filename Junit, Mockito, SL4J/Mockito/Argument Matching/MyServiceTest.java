package com.example;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testArgumentMatching() {

        // Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Stub method
        when(mockApi.getData(anyString())).thenReturn("Mock Data");

        // Inject mock into service
        MyService service = new MyService(mockApi);

        // Call method
        String result = service.fetchData("John");

        // Verify returned value
        assertEquals("Mock Data", result);

        // Verify interaction using argument matcher
        verify(mockApi).getData(eq("John"));
    }
}