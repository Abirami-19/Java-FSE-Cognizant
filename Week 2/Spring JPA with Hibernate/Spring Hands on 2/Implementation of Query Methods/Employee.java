package com.cognizant.ormlearn.model;

import jakarta.persistence.*;

@Entity
public class Employee {

    @Id
    private int id;

    private String name;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "department_id")
    private Department department;

    // Getters and Setters
}