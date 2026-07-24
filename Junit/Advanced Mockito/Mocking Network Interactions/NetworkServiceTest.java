package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class NetworkServiceTest {

    @Test
    public void testServiceWithMockNetworkClient() {

        // Create Mock NetworkClient
        NetworkClient mockNetworkClient = mock(NetworkClient.class);

        // Stub the connect() method
        when(mockNetworkClient.connect()).thenReturn("Mock Connection");

        // Inject mock into service
        NetworkService networkService = new NetworkService(mockNetworkClient);

        // Call the service method
        String result = networkService.connectToServer();

        // Verify the result
        assertEquals("Connected to Mock Connection", result);

        // Verify interaction
        verify(mockNetworkClient).connect();
    }
}