package com.library.aspect;

import org.aspectj.lang.JoinPoint;

public class LoggingAspect {

    public void logBefore(JoinPoint joinPoint) {

        System.out.println("Method Executed : "
                + joinPoint.getSignature().getName());

    }

}