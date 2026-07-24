package com.example;

import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testVoidMethod() {

        // Create mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Stub the void method
        doNothing().when(mockApi).sendData("Hello");

        // Inject mock into service
        MyService service = new MyService(mockApi);

        // Call method
        service.processData("Hello");

        // Verify interaction
        verify(mockApi).sendData(eq("Hello"));
    }
}