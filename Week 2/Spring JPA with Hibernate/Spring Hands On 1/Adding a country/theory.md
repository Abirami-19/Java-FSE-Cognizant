# Hands-on 7
## Add a New Country

### Aim

To add a new country record into the database using Spring Data JPA.

---

## Procedure

### Step 1

Create a new method `addCountry()` in the `CountryService` class.

### Step 2

Annotate the method with `@Transactional`.

### Step 3

Use the `save()` method of `CountryRepository` to insert the new country into the database.

### Step 4

Create a `testAddCountry()` method in `OrmLearnApplication`.

### Step 5

Create a new `Country` object and set its code and name.

### Step 6

Call `countryService.addCountry()` to save the country.

### Step 7

Retrieve the country using `findCountryByCode()`.

### Step 8

Verify that the new country has been added to the database.

---

## Result

Thus, a new country was successfully added to the MySQL database using Spring Data JPA's `save()` method.