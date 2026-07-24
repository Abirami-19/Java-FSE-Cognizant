package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class ApiServiceTest {

    @Test
    public void testServiceWithMockRestClient() {

        // Create Mock RestClient
        RestClient mockRestClient = mock(RestClient.class);

        // Stub the method
        when(mockRestClient.getResponse()).thenReturn("Mock Response");

        // Inject mock into ApiService
        ApiService apiService = new ApiService(mockRestClient);

        // Call service method
        String result = apiService.fetchData();

        // Verify result
        assertEquals("Fetched Mock Response", result);

        // Verify interaction
        verify(mockRestClient).getResponse();
    }
}