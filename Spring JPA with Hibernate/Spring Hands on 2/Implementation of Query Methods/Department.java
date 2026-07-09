package com.cognizant.ormlearn.model;

import java.util.List;
import jakarta.persistence.*;

@Entity
public class Department {

    @Id
    private int id;

    private String name;

    @OneToMany(mappedBy = "department",
               fetch = FetchType.LAZY)
    private List<Employee> employees;

    // Getters and Setters
}