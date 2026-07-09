@Transactional
public List<Country> searchCountry(String text) {

    return countryRepository.findByNameContaining(text);

}

@Transactional
public List<Country> searchCountryStartingWith(String text) {

    return countryRepository.findByNameStartingWith(text);

}

@Transactional
public List<Country> sortCountries() {

    return countryRepository.findAllByOrderByNameAsc();

}

@Transactional
public Country getTopCountry() {

    return countryRepository.findTopByOrderByNameAsc();

}