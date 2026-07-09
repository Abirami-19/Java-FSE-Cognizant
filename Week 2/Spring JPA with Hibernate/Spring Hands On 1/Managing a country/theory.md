# Hands-on 5
## Implement Services for Managing Country

### Aim

To implement service methods for managing Country data using Spring Data JPA.

---

## Objectives

Implement the following operations:

- Find a country based on country code.
- Add a new country.
- Update an existing country.
- Delete a country.
- Find countries using a partial country name.

---

## Hibernate DDL Auto Configuration

The property `spring.jpa.hibernate.ddl-auto` controls how Hibernate manages database tables.

### Options

**create**
- Drops existing tables.
- Creates new tables every time the application starts.

**validate**
- Validates that tables and columns exist.
- Throws an exception if the schema does not match.

**update**
- Updates existing tables.
- Creates missing tables or columns.

**create-drop**
- Creates tables when the application starts.
- Drops tables when the application stops.

Configuration:

spring.jpa.hibernate.ddl-auto=validate

---

## Country Table Population

Delete all existing records from the Country table.

Populate the table using the provided SQL script containing all countries.

---

## Features to be Implemented

1. Find Country by Code
2. Add Country
3. Update Country
4. Delete Country
5. Search Country by Partial Name

These features will be implemented in the subsequent hands-ons.

---

## Result

Thus, the project was configured successfully for implementing Country management services using Spring Data JPA.