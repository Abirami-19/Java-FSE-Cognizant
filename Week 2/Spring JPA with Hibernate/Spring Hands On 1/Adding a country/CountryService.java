@Transactional
public void addCountry(Country country) {

    countryRepository.save(country);

}