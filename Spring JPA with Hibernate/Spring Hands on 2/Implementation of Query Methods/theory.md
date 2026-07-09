
## Object Relational (O/R) Mapping in Spring Data JPA

### Aim

To demonstrate the implementation of Object Relational Mapping (O/R Mapping) using Spring Data JPA annotations.

---

## What is O/R Mapping?

Object Relational Mapping (ORM) is a technique that maps Java objects to database tables. It enables developers to perform database operations using Java objects instead of writing SQL queries.

Spring Data JPA uses Hibernate as the ORM framework.

---

## Relationship Annotations

### 1. @ManyToOne

Represents a many-to-one relationship.

Example:
Many Employees belong to one Department.

---

### 2. @OneToMany

Represents a one-to-many relationship.

Example:
One Department contains many Employees.

---

### 3. @JoinColumn

Specifies the foreign key column.

---

### 4. @ManyToMany

Represents a many-to-many relationship.

Example:
Students can enroll in many Courses and a Course can have many Students.

---

### 5. @JoinTable

Specifies the intermediate table used in a many-to-many relationship.

---

### 6. mappedBy

Indicates the inverse side of a relationship and avoids duplicate mapping.

---

## Fetch Types

### FetchType.EAGER

- Loads related entities immediately.

### FetchType.LAZY

- Loads related entities only when accessed.

---

## Advantages

- Simplifies database operations.
- Automatically manages relationships.
- Reduces SQL coding.
- Improves code readability.

---

## Result

Thus, Object Relational Mapping using Spring Data JPA annotations was demonstrated successfully.