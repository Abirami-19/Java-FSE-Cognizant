# Hands-on 6
## Find a Country Based on Country Code

### Aim

To retrieve a country from the database using its country code with Spring Data JPA.

---

## Procedure

### Step 1

Create a custom exception class named `CountryNotFoundException`.

### Step 2

Create a new method `findCountryByCode()` in the `CountryService` class.

### Step 3

Annotate the method with `@Transactional`.

### Step 4

Use the `findById()` method of `CountryRepository` to retrieve the country.

### Step 5

Check whether the country exists.

- If found, return the country.
- Otherwise, throw `CountryNotFoundException`.

### Step 6

Create a test method in `OrmLearnApplication` to search for a country using its code.

### Step 7

Run the application and verify the output.

---

## Importance of @Transactional

- Starts and manages the database transaction automatically.
- Creates and closes the Hibernate session.
- Ensures data consistency.
- Automatically commits the transaction if successful.
- Rolls back the transaction if an exception occurs.

---

## Result

Thus, a country was successfully retrieved from the database using its country code with Spring Data JPA.