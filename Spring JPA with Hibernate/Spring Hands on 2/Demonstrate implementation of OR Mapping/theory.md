
## Query Methods in Spring Data JPA

### Aim

To demonstrate the implementation of Query Methods in Spring Data JPA.

---

## Introduction

Spring Data JPA provides Query Methods that automatically generate SQL queries based on the method names defined in the Repository interface. This eliminates the need to write SQL or JPQL manually.

---

## Common Query Methods

### 1. Containing

Searches for records containing the given text.

Example:

findByNameContaining(String name)

---

### 2. Starting With

Searches for records whose field starts with the given text.

Example:

findByNameStartingWith(String name)

---

### 3. Sorting

Returns records sorted in ascending or descending order.

Example:

findAllByOrderByNameAsc()

---

### 4. Greater Than

Returns records greater than the given value.

Example:

findBySalaryGreaterThan(double salary)

---

### 5. Less Than

Returns records less than the given value.

Example:

findBySalaryLessThan(double salary)

---

### 6. Between

Returns records between two values.

Example:

findByDateBetween(Date startDate, Date endDate)

---

### 7. Top

Returns the first record or first N records.

Example:

findTopByOrderBySalaryDesc()

---

## Advantages

- No SQL queries required.
- Reduces boilerplate code.
- Easy to implement.
- Improves readability.
- Automatically generates queries.

---

## Result

Thus, various Query Methods of Spring Data JPA were implemented successfully.