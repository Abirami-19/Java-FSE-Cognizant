package com.cognizant.ormlearn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.ormlearn.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

    // JPQL Query
    @Query("SELECT c FROM Country c")
    List<Country> getAllCountries();

    // JPQL with WHERE clause
    @Query("SELECT c FROM Country c WHERE c.code = ?1")
    Country getCountry(String code);

    // HQL Aggregate Function
    @Query("SELECT COUNT(c) FROM Country c")
    long getCountryCount();

    // Native SQL Query
    @Query(value = "SELECT * FROM country", nativeQuery = true)
    List<Country> getCountriesNative();

    // Native SQL with WHERE clause
    @Query(value = "SELECT * FROM country WHERE code = ?1",
           nativeQuery = true)
    Country getCountryNative(String code);
}