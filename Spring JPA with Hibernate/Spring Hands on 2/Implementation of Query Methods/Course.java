package com.cognizant.ormlearn.model;

import java.util.Set;
import jakarta.persistence.*;

@Entity
public class Course {

    @Id
    private int id;

    private String title;

    @ManyToMany(mappedBy = "courses")
    private Set<Student> students;

    // Getters and Setters
}