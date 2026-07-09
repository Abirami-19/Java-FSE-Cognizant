package com.cognizant.ormlearn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.ormlearn.model.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

    // Search by containing text
    List<Country> findByNameContaining(String text);

    // Search by starting text
    List<Country> findByNameStartingWith(String text);

    // Sort by name
    List<Country> findAllByOrderByNameAsc();

    // Top record
    Country findTopByOrderByNameAsc();

}