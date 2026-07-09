package com.cognizant.ormlearn.model;

import java.util.Set;
import jakarta.persistence.*;

@Entity
public class Student {

    @Id
    private int id;

    private String name;

    @ManyToMany
    @JoinTable(
        name = "student_course",
        joinColumns = @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courses;

    // Getters and Setters
}