private static void testAddCountry() {

    LOGGER.info("Start");

    Country country = new Country();

    country.setCode("JP");
    country.setName("Japan");

    countryService.addCountry(country);

    Country result = countryService.findCountryByCode("JP");

    LOGGER.debug("country={}", result);

    LOGGER.info("End");
}