@Transactional
public Country findCountryByCode(String countryCode)
        throws CountryNotFoundException {

    Optional<Country> result =
            countryRepository.findById(countryCode);

    if (!result.isPresent()) {
        throw new CountryNotFoundException(
                "Country not found");
    }

    return result.get();
}