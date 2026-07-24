package com.example;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testVoidMethodThrowsException() {

        // Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Stub the void method to throw an exception
        doThrow(new RuntimeException("API Error"))
                .when(mockApi)
                .sendData("Hello");

        // Inject mock into service
        MyService service = new MyService(mockApi);

        // Verify exception is thrown
        assertThrows(RuntimeException.class, () -> {
            service.processData("Hello");
        });

        // Verify interaction
        verify(mockApi).sendData("Hello");
    }
}