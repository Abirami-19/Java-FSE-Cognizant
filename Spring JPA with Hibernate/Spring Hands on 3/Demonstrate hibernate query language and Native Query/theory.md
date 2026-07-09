# Hands-on 10
## Hibernate Query Language (HQL) and Native Query

### Aim

To demonstrate the implementation of Hibernate Query Language (HQL), Java Persistence Query Language (JPQL), and Native SQL Queries using Spring Data JPA.

---

## Hibernate Query Language (HQL)

- HQL stands for Hibernate Query Language.
- It is an object-oriented query language.
- HQL works with Java entity classes instead of database tables.
- Hibernate converts HQL into SQL automatically.

Example:

FROM Country

---

## Java Persistence Query Language (JPQL)

- JPQL stands for Java Persistence Query Language.
- It is defined by the JPA specification.
- JPQL is portable across all JPA providers.
- JPQL also works with entity classes instead of table names.

Example:

SELECT c FROM Country c

---

## Difference Between HQL and JPQL

| HQL | JPQL |
|-----|------|
| Hibernate-specific | JPA Standard |
| Supports Hibernate features | Portable across JPA providers |
| Works with Hibernate | Works with any JPA implementation |

---

## @Query Annotation

The @Query annotation is used to define custom JPQL or SQL queries in the Repository interface.

---

## HQL Fetch Join

The FETCH keyword retrieves parent and child entities together in a single query, reducing additional database queries.

Example:

SELECT d FROM Department d JOIN FETCH d.employees

---

## Aggregate Functions

Common aggregate functions:

- COUNT()
- SUM()
- AVG()
- MAX()
- MIN()

---

## Native Query

A Native Query is a database-specific SQL query.

Example:

SELECT * FROM country

---

## nativeQuery Attribute

Setting `nativeQuery = true` tells Spring Data JPA that the query is a SQL query instead of JPQL.

Example:

@Query(value="SELECT * FROM country", nativeQuery=true)

---

## Result

Thus, HQL, JPQL, Fetch Join, Aggregate Functions, and Native Queries were demonstrated successfully.